import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import appConfig from './app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  let app: NestExpressApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  let swaggerOptions: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  let swaggerConfig = new DocumentBuilder()
    .setTitle('Expatswap User Management')
    .setDescription(
      `As part of Expatswap Technical Assessment, 
      this is an API documentation for user management module.`
    )
    .setVersion('1.0.0')
    .build();
  let document = SwaggerModule.createDocument(app, swaggerConfig, swaggerOptions);
  SwaggerModule.setup('docs', app, document);
  await app.listen(appConfig().port);
}
bootstrap();
