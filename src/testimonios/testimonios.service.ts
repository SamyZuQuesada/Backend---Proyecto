/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable } from '@nestjs/common';
import { Testimonios } from './entities/testimonio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';

@Injectable()
export class TestimoniosService {
  constructor(
    @InjectRepository(Testimonios)
    private testimoniosRepository: Repository<Testimonios>, //inyeccion de dependencias
  ) {}

  getTestimonios(): Promise<Testimonios[]> {
    const testimonios = this.testimoniosRepository.find();
    return testimonios;
  }

  async createTestimonio(testimonio: Testimonios): Promise<Testimonios> {
    const newTestimonio = this.testimoniosRepository.create(testimonio);
    const testimonioCreated =
      await this.testimoniosRepository.save(newTestimonio);
    return testimonioCreated;
  }

  async updateTestimonio(
    id: number,
    testimonio: Testimonios,
  ): Promise<UpdateResult> {
    const testimonioUpdate = await this.testimoniosRepository.update(
      id,
      testimonio,
    );
    return testimonioUpdate;
  }

  deleteTestimonio(id: number): string {
    this.testimoniosRepository.delete(id);
    return `Testimonio con id ${id} eliminado`;
  }
}
