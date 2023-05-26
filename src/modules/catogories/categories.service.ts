import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from '../sport/entities/sport.entity';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { SportCategories } from '../sport/entities/sport-category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDTO): Promise<Category> {
    const { name, description, status } = createCategoryDto;

    const newCategory = new Category();
    newCategory.name = name;
    newCategory.description = description;
    newCategory.status = status;

    await this.categoryRepository.save(newCategory);

    return newCategory;
  }

  findAll() {
    return `This action returns all Categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catogory`;
  }

  update(id: number, updateCatogoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} catogory`;
  }

  remove(id: number) {
    return `This action removes a #${id} catogory`;
  }
}
