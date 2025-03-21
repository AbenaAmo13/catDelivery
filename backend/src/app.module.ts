import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {CommsModule} from './comms/comms.module'
import { AppService } from './app.service';

@Module({
  imports: [CommsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
