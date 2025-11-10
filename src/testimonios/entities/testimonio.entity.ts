import { Landing } from 'src/landing/entities/landing.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Testimonios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  avatarIniciales: string;

  //Relacion:
  @ManyToOne(() => Landing, (landing) => landing.testimonios, {
    eager: true,
  })
  landing: Landing;
}
