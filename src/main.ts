// server/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 核心：允许跨域，这样你的 Vue 前端才能访问
  app.enableCors({
    origin: '*', // 生产环境建议换成你前端的实际域名
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  // 如果在本地运行，监听 3000
  await app.listen(3000);
}
bootstrap();
