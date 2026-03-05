import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors() // для работы CORS, чтобы браузеры и мобильные приложения не блокировали запросы к вашему API.
  await app.listen(3000, '0.0.0.0'); // Слушать все адреса
}
bootstrap();
