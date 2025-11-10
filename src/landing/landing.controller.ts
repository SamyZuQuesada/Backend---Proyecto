import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { LandingService } from './landing.service';
import { Landing } from './entities/landing.entity';

@Controller('landing')
export class LandingController {
  constructor(private readonly landingService: LandingService) {}

  @Get()
  findAll() {
    return this.landingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.landingService.findOne(id);
  }

  @Post()
  createLanding(@Body() landing: Landing): Promise<Landing> {
    return this.landingService.createLanding(landing);
  }

  @Put(':id')
  updateLanding(
    @Param('id', ParseIntPipe) id: number,
    @Body() landing: Landing,
  ) {
    return this.landingService.updateLanding(id, landing);
  }

  @Delete(':id')
  deleteLanding(@Param('id', ParseIntPipe) id: number): string {
    return this.landingService.deleteLanding(id);
  }
}
