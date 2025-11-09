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
  rating: string;

  @Column()
  avatarUrl: string;

  //Relacion:
  @ManyToOne(() => Landing, (landing) => landing.testimonios, {
    cascade: true,
  })
  landing: Landing;
}
