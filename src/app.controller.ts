import { Body, Controller, Inject, OnModuleDestroy, OnModuleInit, Post } from "@nestjs/common";
import { ClientMqtt } from "@nestjs/microservices";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("[001]. MQTT Test Controller")
@Controller("mqtt")
export class AppController implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject("MQTT_SVC") private readonly mqttClient: ClientMqtt) {
    mqttClient.send("notifications", "test").subscribe();
  }

  @ApiOperation({ summary: "Sum" })
  @ApiBody({ type: [Number] })
  @Post("sum")
  sum(@Body() numbers: number[]) {
    this.mqttClient.send("sum", { values: numbers }).subscribe();
  }

  @ApiOperation({ summary: "Max" })
  @ApiBody({ type: [Number] })
  @Post("max")
  max(@Body() numbers: number[]) {
    this.mqttClient.send("max", { values: numbers }).subscribe();
  }

  @ApiOperation({ summary: "Print" })
  @ApiBody({ type: [String] })
  @Post("print")
  print(@Body() textArray: string[]) {
    this.mqttClient.send("print", { values: textArray }).subscribe();
  }

  async onModuleInit() {
    await this.mqttClient.connect();
  }

  onModuleDestroy() {
    this.mqttClient.close();
  }
}
