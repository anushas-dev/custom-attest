import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {
    logger: ['log', 'error', 'warn', 'fatal'],
    autoFlushLogs: false,

  });
  await app.listen(3000);
}
bootstrap();
