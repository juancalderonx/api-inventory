import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatogoriesService } from './catogories.service';
import { CreateCatogoryDto } from './dto/create-catogory.dto';
import { UpdateCatogoryDto } from './dto/update-catogory.dto';

@Controller('catogories')
export class CatogoriesController {
  constructor(private readonly catogoriesService: CatogoriesService) {}

  @Post()
  create(@Body() createCatogoryDto: CreateCatogoryDto) {
    return this.catogoriesService.create(createCatogoryDto);
  }

  @Get()
  findAll() {
    return this.catogoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catogoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatogoryDto: UpdateCatogoryDto) {
    return this.catogoriesService.update(+id, updateCatogoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catogoriesService.remove(+id);
  }
}
