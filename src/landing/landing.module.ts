import { Module } from '@nestjs/common';
import { LandingService } from './landing.service';
import { LandingController } from './landing.controller';
import { Landing } from './entities/landing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Landing])],
  controllers: [LandingController],
  providers: [LandingService],
})
export class LandingModule {}
