import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Landing } from './entities/landing.entity';

@Injectable()
export class LandingService {
  constructor(
    @InjectRepository(Landing)
    private landingRepository: Repository<Landing>,
  ) {}

  async findOneWithRelations(): Promise<Landing | null> {
    return await this.landingRepository.findOne({
      relations: ['servicios', 'testimonios'],
      where: { id: 1 },
    });
  }
}
