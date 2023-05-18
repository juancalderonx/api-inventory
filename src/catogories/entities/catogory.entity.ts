import { Status } from 'src/common/enum/status-enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { CategoryProduct } from './category-product.entity';
import { SportCategories } from 'src/sport/entities/sport-category.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ length: 300, nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.activo,
  })
  status: Status;

  @CreateDateColumn({ type: 'timestamp' })
  creationDate: Date;

  @OneToMany(
    () => CategoryProduct,
    (categoryProduct) => categoryProduct.category,
    {
      cascade: true,
    },
  )
  categoryProducts: CategoryProduct[];

  @OneToMany(
    () => SportCategories,
    (sportCategories) => sportCategories.category,
    {
      cascade: true,
    },
  )
  categorySports: SportCategories[];
}
