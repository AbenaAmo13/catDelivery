import { Module } from '@nestjs/common';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';

/* This module is to handle communication of cat food prices to users  */
@Module({
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}
