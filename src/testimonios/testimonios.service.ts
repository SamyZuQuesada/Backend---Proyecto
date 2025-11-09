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
}
