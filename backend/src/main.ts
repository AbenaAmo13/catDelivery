import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with environment variables
  const allowedOrigins = process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'];;
  let port = process.env.PORT || '3000';
  app.enableCors({
    allowedHeaders: 'Content-Type, Accept', // Allowed headers
    origin: allowedOrigins,
    methods: 'GET',
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
