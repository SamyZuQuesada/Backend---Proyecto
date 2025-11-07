import { Injectable } from '@nestjs/common';
import { UpdateTestimonioDto } from './dto/update-testimonio.dto';
import { Testimonio } from './entities/testimonio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';

@Injectable()
export class TestimoniosService {
  constructor(
    @InjectRepository(Testimonio)
    private testimoniosRepository: Repository<Testimonio>, //inyeccion de dependencias 
  ) {}

  getTestimonios(): Promise<Testimonio[]> {
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
