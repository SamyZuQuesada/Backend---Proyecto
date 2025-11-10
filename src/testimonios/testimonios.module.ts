import { Module } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { TestimoniosController } from './testimonios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimonios } from './entities/testimonio.entity';
import { Landing } from 'src/landing/entities/landing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonios, Landing])],
  controllers: [TestimoniosController],
  providers: [TestimoniosService],
})
export class TestimoniosModule {}
