import { Module } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { TestimoniosController } from './testimonios.controller';

@Module({
  controllers: [TestimoniosController],
  providers: [TestimoniosService],
})
export class TestimoniosModule {}
