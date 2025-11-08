import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Landing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logoUrl: string;

  @Column()
  title: string;

  @Column()
  description: string;

  //Relaciones:

  //Servicios:
  @OneToMany(() => Servicio, (servicio) => servicio.landing, { cascade: true })
  servicios: Servicio[];

  //Testimonios:
}
