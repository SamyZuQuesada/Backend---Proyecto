import { Body, Controller, Param, Put } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { Servicio } from './entities/servicio.entity';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Put(':id')
  updateServicio(
    @Param('id') id: number,
    @Body() servicio: Servicio,
  ): Promise<any> {
    return this.serviciosService.updateServicio(id, servicio);
  }
}
