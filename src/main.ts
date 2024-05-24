import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const API_KEY = 'AJDSFKLAJSDBFKLASNDFKLANKFDNASLKF';

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
