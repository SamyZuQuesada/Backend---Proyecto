import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landing } from './entities/landing.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing) private landingRepository: Repository<Landing>,
  ) {}

  //Leer el landing con los servicios y testimonios
  getLanding(): Promise<Landing[]> {
    const landing = this.landingRepository.find({
      relations: ['servicios'], //agregar la relacion con testimonios
    });
    return landing;
  }

  async updateLanding(id: number, landing: Landing): Promise<UpdateResult> {
    const landingUpdated = await this.landingRepository.update(id, landing);
    return landingUpdated;
  }
}
