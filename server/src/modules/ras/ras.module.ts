import { Module } from '@nestjs/common';
import { RasController } from './ras.controller';
import { RasService } from './ras.service';

@Module({
  controllers: [RasController],
  providers: [RasService],
})
export class RasModule {}
