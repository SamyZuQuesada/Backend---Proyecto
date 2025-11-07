import { Module } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { TestimoniosController } from './testimonios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimonios } from './entities/testimonio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonios])],
  controllers: [TestimoniosController],
  providers: [TestimoniosService],
})
export class TestimoniosModule {}
