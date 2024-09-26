import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Product and Order API') // Título del API
    .setDescription('API for managing products and orders') // Descripción
    .setVersion('1.0') // Versión
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Ruta donde estará la documentación

  await app.listen(3000);
}
bootstrap();
