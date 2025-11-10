/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { Landing } from 'src/landing/entities/landing.entity';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
    @InjectRepository(Landing)
    private landingRepository: Repository<Landing>,
  ) {}
  async createServicio(body: any): Promise<Servicio> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { nombre, descripcion, imagenUrl, landingId } = body;
    const landing = await this.landingRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: { id: landingId },
    });

    if (!landing) {
      throw new Error(`Landing con ID ${landingId} no encontrado`);
    }

    const newServicio = this.servicioRepository.create({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      nombre,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      descripcion,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      imagenUrl,
      landing,
    });

    const servicioCreated = await this.servicioRepository.save(newServicio);
    return servicioCreated;
  }

  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOne({
      where: { id },
      relations: ['landing'],
    });
    if (!servicio) {
      throw new Error(`Servicio con ID ${id} no encontrado`);
    }
    return servicio;
  }

  async findAll(): Promise<Servicio[]> {
    return await this.servicioRepository.find({
      relations: ['landing'],
    });
  }

  async updateServicio(id: number, servicio: Servicio): Promise<UpdateResult> {
    const servicioUpdate = await this.servicioRepository.update(id, servicio);
    return servicioUpdate;
  }

  deleteServicio(id: number): string {
    this.findOne(id);
    this.servicioRepository.delete(id);
    return `Servicio con id ${id} eliminado`;
  }
}
