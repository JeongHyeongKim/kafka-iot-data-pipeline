import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        KAFKA_BROKER_HOST: Joi.string().required(),
        KAFKA_BROKER_PORT: Joi.number().required(),
        REDIS_USER: Joi.number().required(),
        REDIS_PASSWORD: Joi.number().required(),
        REDIS_PORT: Joi.number().required(),
        REDIS_HOST: Joi.string().required(),
        MODBUS_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
