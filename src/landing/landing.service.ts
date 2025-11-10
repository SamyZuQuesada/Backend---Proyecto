import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landing } from './entities/landing.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing) private landingRepository: Repository<Landing>,
  ) {}

  async getLanding(): Promise<Landing> {
    const landing = await this.landingRepository.findOne({
      relations: ['servicios', 'testimonios'],
      where: { id: 1 },
    });
    if (!landing) {
      throw new Error('Landing no encontrado');
    }
    return landing;
  }

  async updateLanding(id: number, landing: Landing): Promise<UpdateResult> {
    const landingUpdated = await this.landingRepository.update(id, landing);
    return landingUpdated;
  }
}
