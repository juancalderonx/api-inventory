// category-product.entity.ts
import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class CategoryProduct {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Product, (product) => product.categoryProducts)
  product: Product;

  @ManyToOne(() => Category, (category) => category.categoryProducts)
  category: Category;
}
