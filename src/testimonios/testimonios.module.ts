import { Module } from '@nestjs/common';
import { TestimoniosService } from './testimonios.service';
import { TestimoniosController } from './testimonios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testimonio } from './entities/testimonio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testimonio])],
  controllers: [TestimoniosController],
  providers: [TestimoniosService],
})
export class TestimoniosModule {}
