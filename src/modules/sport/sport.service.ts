import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';
import { Repository } from 'typeorm';
import { SportCategories } from './entities/sport-category.entity';
import { Category } from '../catogories/entities/category.entity';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(Sport)
    private sportRepository: Repository<Sport>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(SportCategories)
    private sportCategoriesRepository: Repository<SportCategories>,
  ) {}

  async create(createSportDto: CreateSportDto): Promise<Sport> {
    const { categories, ...sportData } = createSportDto;

    const createdSport = this.sportRepository.create(sportData);
    await this.sportRepository.save(createdSport);

    const sportCategories = [];

    for (const categoryId of categories) {
      const sportCategory = new SportCategories();
      sportCategory.sport = createdSport;

      const category = await this.categoryRepository.findOneBy({
        id: categoryId,
      });
      sportCategory.category = category;

      sportCategories.push(sportCategory);
    }

    await this.sportCategoriesRepository.save(sportCategories);

    return createdSport;
  }

  findAll() {
    return `This action returns all sport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sport`;
  }

  update(id: number, updateSportDto: UpdateSportDto) {
    return `This action updates a #${id} sport`;
  }

  remove(id: number) {
    return `This action removes a #${id} sport`;
  }
}
