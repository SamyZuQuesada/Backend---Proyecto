// src/landing/entities/landing.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Servicio } from '../../servicios/entities/servicio.entity';
import { Testimonios } from '../../testimonios/entities/testimonio.entity';

@Entity()
export class Landing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logoUrl: string;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @OneToMany(() => Servicio, (servicio) => servicio.landing, {
    cascade: true,
  })
  servicios: Servicio[];

  @OneToMany(() => Testimonios, (testimonio) => testimonio.landing, {
    cascade: true,
  })
  testimonios: Testimonios[];
}
