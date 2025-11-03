import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './landing/landing.module';
import { TestimoniosModule } from './testimonios/testimonios.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [LandingModule, ServiciosModule, TestimoniosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
