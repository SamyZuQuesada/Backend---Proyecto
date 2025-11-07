import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Testimonio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  clientAvatar: string;

  @Column()
  rating: string;
}
