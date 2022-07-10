import { NestFactory } from '@nestjs/core';
import { config } from '@server/config'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port, () => console.log(`Application to listening on port ${config.port}`));
}

bootstrap();
