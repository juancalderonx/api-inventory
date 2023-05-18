import { Module } from '@nestjs/common';
import { CatogoriesService } from './catogories.service';
import { CatogoriesController } from './catogories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/catogory.entity';
import { CategoryProduct } from './entities/category-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryProduct])],
  controllers: [CatogoriesController],
  providers: [CatogoriesService],
})
export class CatogoriesModule {}
