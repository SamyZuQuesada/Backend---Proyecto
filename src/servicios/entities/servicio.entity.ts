import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  //@ManyToOne(() => Landing, (landing) => landing.servicios, {
  //  eager: true,
  //})
  //landing: Landing;
}
