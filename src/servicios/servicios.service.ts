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

  getServicios(): Promise<Servicio[]> {
    const servicios = this.servicioRepository.find();
    return servicios;
  }

  async createServicio(servicio: Servicio): Promise<Servicio> {
    const newServicio = this.servicioRepository.create(servicio);
    const servicioCreated = await this.servicioRepository.save(newServicio);
    return servicioCreated;
  }

  async updateServicio(id: number, servicio: Servicio): Promise<UpdateResult> {
    const servicioUpdate = await this.servicioRepository.update(id, servicio);
    return servicioUpdate;
  }
}
