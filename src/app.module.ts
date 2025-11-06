import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './landing/landing.module';
import { TestimoniosModule } from './testimonios/testimonios.module';
import { ServiciosModule } from './servicios/servicios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hys14072019',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
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
