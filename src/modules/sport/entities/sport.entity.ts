import { Status } from 'src/common/enum/status-enum';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SportCategories } from './sport-category.entity';

@Entity()
export class Sport {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.activo,
  })
  status: Status;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creationDate: Date;

  @OneToMany(
    () => SportCategories,
    (sportCategories) => sportCategories.sport,
    {
      cascade: true,
    },
  )
  categorySports: SportCategories[];
}
