import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
  ) {}

  async updateServicio(id: number, servicio: Servicio): Promise<UpdateResult> {
    const servicioUpdate = await this.servicioRepository.update(id, servicio);
    return servicioUpdate;
  }
}
