import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 36,
  })
  nombres: string;

  @Column('varchar', {
    length: 36,
    nullable: true,
    default: null,
  })
  apellidos: string;

  @Column('text', {
    default: 'active',
  })
  status: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('varchar', {
    length: 512,
    select: false,
  })
  password: string;

  @CreateDateColumn()
  fechaHora: Date;
}
