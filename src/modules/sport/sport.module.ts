import { Module } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportController } from './sport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from './entities/sport.entity';
import { SportCategories } from './entities/sport-category.entity';
import { Category } from '../catogories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sport, SportCategories, Category])],
  controllers: [SportController],
  providers: [SportService],
})
export class SportModule {}
