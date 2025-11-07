import { Injectable } from '@nestjs/common';
import { UpdateTestimonioDto } from './DTO/update-testimonio.dto';
import { Testimonios } from './entities/testimonio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

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
    updateTestimonioDto: UpdateTestimonioDto,
  ): Promise<UpdateResult> {
    const userUpdated = await this.testimoniosRepository.update(
      id,
      updateTestimonioDto,
    );
    return userUpdated;
  }
}
