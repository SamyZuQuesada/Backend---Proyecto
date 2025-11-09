import { Controller, Body, Put, Param } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { Testimonios } from './entities/testimonio.entity';

@Controller('testimonios')
export class TestimoniosController {
  constructor(private readonly testimoniosService: TestimoniosService) {}

  @Put(':id')
  updateTestimonio(
    @Param('id') id: number,
    @Body() testimonio: Testimonios,
  ): Promise<any> {
    return this.testimoniosService.updateTestimonio(id, testimonio);
  }
}
