import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sport } from './sport.entity';
import { Category } from 'src/catogories/entities/catogory.entity';

@Entity('sport-categories')
export class SportCategories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Sport, (sport) => sport.categorySports)
  sport: Sport;

  @ManyToOne(() => Category, (category) => category.categoryProducts)
  category: Category;
}
