import { Controller, Body, Put, Param, Get } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { Testimonios } from './entities/testimonio.entity';

@Controller('testimonios')
export class TestimoniosController {
  constructor(private readonly testimoniosService: TestimoniosService) {}

  @Get()
  getTestimonios(): Promise<Testimonios[]> {
    const testimoniosList = this.testimoniosService.getTestimonios();
    return testimoniosList;
  }

  @Put(':id')
  updateTestimonio(
    @Param('id') id: number,
    @Body() testimonio: Testimonios,
  ): Promise<any> {
    return this.testimoniosService.updateTestimonio(id, testimonio);
  }
}
