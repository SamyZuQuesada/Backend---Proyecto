// src/testimonios/entities/testimonio.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Landing } from '../../landing/entities/landing.entity';

@Entity('testimonios')
export class Testimonios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'date' })
  date: string;

  @ManyToOne(() => Landing, (landing) => landing.testimonios)
  @JoinColumn({ name: 'landingId' })
  landing: Landing;
}
