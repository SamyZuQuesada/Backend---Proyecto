import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';

@Controller('testimonios')
export class TestimoniosController {
  constructor(private readonly testimoniosService: TestimoniosService) {}

  @Get()
  findAll() {
    return this.testimoniosService.getTestimonios();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestimonioDto: UpdateTestimonioDto,
  ) {
    return this.testimoniosService.updateTestimonio(+id, updateTestimonioDto);
  }
}
