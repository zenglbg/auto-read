import { UserModule } from '@modules/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RasEntity } from './models/ras.entity';
import { RasController } from './ras.controller';
import { RasService } from './ras.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RasEntity]),
    forwardRef(() => UserModule),
  ],
  controllers: [RasController],
  providers: [RasService],
})
export class RasModule {}
