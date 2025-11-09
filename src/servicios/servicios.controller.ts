import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { Servicio } from './entities/servicio.entity';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  getServicios(): Promise<Servicio[]> {
    const serviciosList = this.serviciosService.getServicios();
    return serviciosList;
  }

  @Post()
  createServicio(@Body() servicio: Servicio): Promise<Servicio> {
    return this.serviciosService.createServicio(servicio);
  }

  @Put(':id')
  updateServicio(
    @Param('id') id: number,
    @Body() servicio: Servicio,
  ): Promise<any> {
    return this.serviciosService.updateServicio(id, servicio);
  }

  @Delete(':id')
  deleteServicio(@Param('id') id: number): string {
    return this.serviciosService.deleteServicio(id);
  }
}
