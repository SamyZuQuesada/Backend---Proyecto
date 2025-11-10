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
import { ServiciosService } from './servicios.service';
import { Servicio } from './entities/servicio.entity';
import { UpdateResult } from 'typeorm';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  findAll() {
    return this.serviciosService.findAll();
  }

  @Post()
  createServicio(@Body() body: any): Promise<Servicio> {
    return this.serviciosService.createServicio(body);
  }

  @Put(':id')
  updateServicio(
    @Param('id', ParseIntPipe) id: number,
    @Body() servicio: Servicio,
  ): Promise<UpdateResult> {
    return this.serviciosService.updateServicio(id, servicio);
  }

  @Delete(':id')
  deleteServicio(@Param('id', ParseIntPipe) id: number): string {
    return this.serviciosService.deleteServicio(id);
  }
}
