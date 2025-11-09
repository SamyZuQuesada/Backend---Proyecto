import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landing } from './entities/landing.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing) private landingRepository: Repository<Landing>,
  ) {}

  async getLanding(): Promise<Landing[]> {
    const landing = this.landingRepository.find({
      relations: ['services', 'testimonials'],
    });
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
}
