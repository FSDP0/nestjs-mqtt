import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppMessageController } from "./app.message.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "MQTT_SVC",
        transport: Transport.MQTT,
        options: {
          hostname: "localhost",
          port: 1883
        }
      }
    ])
  ],
  controllers: [AppController, AppMessageController]
})
export class AppModule {}
