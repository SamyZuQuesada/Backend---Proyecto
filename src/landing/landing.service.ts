/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landing } from './entities/landing.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing) private landingRepository: Repository<Landing>,
  ) {}

  async findAll(): Promise<Landing[]> {
    return await this.landingRepository.find({
      relations: ['servicios', 'testimonios'],
    });
  }

  async findOne(id: number): Promise<Landing> {
    const landing = await this.landingRepository.findOne({
      where: { id },
      relations: ['servicios', 'testimonios'],
    });

    if (!landing) {
      throw new NotFoundException(`Landing con ID ${id} no encontrado`);
    }

    return landing;
  }
  async createLanding(landing: Landing): Promise<Landing> {
    const newLanding = this.landingRepository.create(landing);
    const landingCreated = await this.landingRepository.save(newLanding);
    return landingCreated;
  }

  async updateLanding(id: number, landing: Landing): Promise<UpdateResult> {
    const landingUpdated = await this.landingRepository.update(id, landing);
    return landingUpdated;
  }

  deleteLanding(id: number): string {
    this.landingRepository.delete(id);
    return `Landing con id ${id} eliminado`;
  }
}
