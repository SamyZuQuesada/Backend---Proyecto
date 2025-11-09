import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Landing } from 'src/landing/entities/landing.entity';
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

  //Relacion con Landing:
  @ManyToOne(() => Landing, (landing) => landing.servicios, {
    cascade: true,
  })
  landing: Landing;
}
