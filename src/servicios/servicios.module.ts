import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { Servicio } from './entities/servicio.entity';
import { Landing } from 'src/landing/entities/landing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio, Landing])],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
