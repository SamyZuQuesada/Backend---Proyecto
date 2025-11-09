import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LandingService } from './landing.service';
import { Landing } from './entities/landing.entity';

@Controller('landing')
export class LandingController {
  constructor(private readonly landingService: LandingService) {}

  @Get()
  getLanding(): Promise<Landing[]> {
    const landingList = this.landingService.getLanding();
    return landingList;
  }

  @Post()
  createLanding(@Body() landing: Landing): Promise<Landing> {
    return this.landingService.createLanding(landing);
  }

  @Put(':id')
  updateLanding(@Param('id') id: number, @Body() landing: Landing) {
    return this.landingService.updateLanding(id, landing);
  }
}
