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

//   async findOneWithRelations(): Promise<Landing | null> {
//     return await this.landingRepository.findOne({
//       relations: ['servicios', 'testimonios'],
//       where: { id: 1 },
//     });
//   }
// landing.service.ts - CON LOGS DE DIAGNÓSTICO
  async findOneWithRelations(): Promise<Landing> {
  try {
      console.log('🔍 [1] Buscando landing con relaciones...');

      const landing = await this.landingRepository.findOne({
        relations: ['servicios', 'testimonios'],
        where: { id: 1 },
    });

    console.log('📊 [2] Resultado de findOne:', landing);

    if (!landing) {
        console.log('📝 [3] Creando landing por defecto...');
        const defaultLanding = this.landingRepository.create({
        logoUrl: 'Imagenes/LOGO CABINAS.1.png',
        titulo: '¡Bienvenidos a Cabañas La Reserva!',
          descripcion: 'El lugar ideal para desconectarte...',
      });
        const savedLanding = await this.landingRepository.save(defaultLanding);
        console.log('✅ [4] Landing creado:', savedLanding);
        return savedLanding;
    }

      console.log(
        '✅ [5] Landing encontrado con servicios:',
        landing.servicios,
      );
      console.log(
        '✅ [6] Landing encontrado con testimonios:',
        landing.testimonios,
      );
      console.log('🎯 [7] Landing completo a devolver:', landing);

      return landing;
    } catch (error) {
      console.error('❌ [ERROR] Error en findOneWithRelations:', error);
      throw error;
  }
  }
}
