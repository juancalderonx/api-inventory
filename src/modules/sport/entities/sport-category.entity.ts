import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sport } from './sport.entity';
import { Category } from 'src/modules/catogories/entities/category.entity';

@Entity()
export class SportCategories {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Sport, (sport) => sport.categorySports)
  sport: Sport;

  @ManyToOne(() => Category, (category) => category.categorySports)
  category: Category;
}
