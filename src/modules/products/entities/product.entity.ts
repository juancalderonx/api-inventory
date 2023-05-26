import { Status } from 'src/common/enum/status-enum';
import { CategoryProduct } from 'src/modules/catogories/entities/category-product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 300, nullable: true })
  description: string;

  @Column({ type: 'double' })
  price: number;

  @Column({ type: 'double' })
  stock: number;

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
    (categoryProduct) => categoryProduct.product,
    {
      cascade: true,
    },
  )
  categoryProducts?: CategoryProduct[];
}
