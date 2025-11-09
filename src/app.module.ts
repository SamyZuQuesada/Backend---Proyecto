import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingModule } from './landing/landing.module';
import { TestimoniosModule } from './testimonios/testimonios.module';
import { ServiciosModule } from './servicios/servicios.module';
import { Servicio } from './servicios/entities/servicio.entity';
import { Landing } from './landing/entities/landing.entity';
import { Testimonios } from './testimonios/entities/testimonio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nestapi',
      entities: [Servicio, Landing, Testimonios],
      synchronize: true,
    }),
    LandingModule,
    ServiciosModule,
    TestimoniosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
