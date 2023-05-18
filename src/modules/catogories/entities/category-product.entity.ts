import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './catogory.entity';
import { Product } from 'src/modules/products/entities/product.entity';

@Entity('category-product')
export class CategoryProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Category, (category) => category.categoryProducts)
  category: Category;

  @ManyToOne(() => Product, (bodega) => bodega.categoryProducts)
  product: Product;
}
