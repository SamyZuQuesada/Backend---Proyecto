// src/servicios/entities/servicio.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Landing } from '../../landing/entities/landing.entity';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  imagenUrl: string;

  @ManyToOne(() => Landing, (landing) => landing.servicios)
  @JoinColumn({ name: 'landingId' })
  landing: Landing;
}
