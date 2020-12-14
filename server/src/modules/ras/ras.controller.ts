import { Body, Controller, Get, Post } from '@nestjs/common';
import { RasService } from './ras.service';

@Controller('ras')
export class RasController {
  constructor(private readonly rasService: RasService) {}

  @Get()
  getRas() {
    return this.rasService.getRas();
  }

  @Get('a')
  getnewCrypto() {
    return this.rasService.getCryptojs();
  }

  @Post('add')
  public addRas(@Body() ras) {
    return this.rasService.addRas(ras);
  }
}
