import { Controller, Inject, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ClientMqtt, MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class AppMessageController implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(AppMessageController.name);

  constructor(@Inject("MQTT_SVC") private readonly mqttClient: ClientMqtt) {}

  @MessagePattern("sum")
  sum(@Payload() numbers: { values: number[] }) {
    const val = numbers.values.reduce((a, b) => a + b);

    this.logger.log(`Sum : ${val}`);
  }

  @MessagePattern("max")
  max(@Payload() numbers: { values: number[] }) {
    const val = Math.max(...numbers.values);

    this.logger.log(`Max : ${val}`);
  }

  @MessagePattern("print")
  print(@Payload() text: { values: string[] }) {
    this.logger.log(`Print : ${text.values}`);
  }

  async onModuleInit() {
    await this.mqttClient.connect();
  }

  onModuleDestroy() {
    this.mqttClient.close();
  }
}
