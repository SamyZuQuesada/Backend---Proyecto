import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { LandingService } from './landing.service';
import { Landing } from './entities/landing.entity';

@Controller('landing')
export class LandingController {
  constructor(private readonly landingService: LandingService) {}

  @Get() // Endpoint para obtener el landing con servicios y testimonios
  findAll() {
    return this.landingService.getLanding();
  }

  @Put(':id')
  updateLanding(@Param('id') id: number, @Body() landing: Landing) {
    return this.landingService.updateLanding(id, landing);
  }
}
