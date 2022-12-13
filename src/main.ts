import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // adicionar validação nas rotas
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
