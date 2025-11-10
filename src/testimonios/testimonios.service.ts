/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Testimonios } from './entities/testimonio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Landing } from 'src/landing/entities/landing.entity';

@Injectable()
export class TestimoniosService {
  constructor(
    @InjectRepository(Testimonios)
    private testimoniosRepository: Repository<Testimonios>, //inyeccion de dependencias
    @InjectRepository(Landing)
    private landingRepository: Repository<Landing>,
  ) {}

  async findAll(): Promise<Testimonios[]> {
    return await this.testimoniosRepository.find({
      relations: ['landing'],
    });
  }

  async findOne(id: number): Promise<Testimonios> {
    const testimonio = await this.testimoniosRepository.findOne({
      where: { id },
      relations: ['landing'],
    });
    if (!testimonio) {
      throw new Error(`Testimonio con ID ${id} no encontrado`);
    }
    return testimonio;
  }

  async createTestimonio(body: any): Promise<Testimonios> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, description, rating, avatarIniciales, landingId } = body;
    const landing = await this.landingRepository.findOne({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      where: { id: landingId },
    });

    if (!landing) {
      throw new NotFoundException(`Landing con ID ${landingId} no encontrado`);
    }

    const newTestimonio = this.testimoniosRepository.create({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      name,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      description,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      rating,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      avatarIniciales,
      landing,
    });

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
    this.findOne(id);
    this.testimoniosRepository.delete(id);
    return `Testimonio con id ${id} eliminado`;
  }
}
