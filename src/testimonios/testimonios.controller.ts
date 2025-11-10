import {
  Controller,
  Body,
  Put,
  Param,
  Get,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { Testimonios } from './entities/testimonio.entity';
import { UpdateResult } from 'typeorm';

@Controller('testimonios')
export class TestimoniosController {
  constructor(private readonly testimoniosService: TestimoniosService) {}

  @Get()
  findAll() {
    return this.testimoniosService.findAll();
  }

  @Post()
  createTestimonio(@Body() body: any): Promise<Testimonios> {
    return this.testimoniosService.createTestimonio(body);
  }
  @Put(':id')
  updateTestimonio(
    @Param('id', ParseIntPipe) id: number,
    @Body() testimonio: Testimonios,
  ): Promise<UpdateResult> {
    return this.testimoniosService.updateTestimonio(id, testimonio);
  }

  @Delete(':id')
  deleteTestimonio(@Param('id', ParseIntPipe) id: number): string {
    return this.testimoniosService.deleteTestimonio(id);
  }
}
