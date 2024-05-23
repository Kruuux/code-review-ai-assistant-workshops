import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // ===== 1 =====
  const API_KEY =
    'd87e842811e3c2086d1f6cfe6eede0c44b3a62d78e3e7c17050ee77d0f83f5bc';

  console.log(API_KEY);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
