import { Injectable } from '@nestjs/common';
import { CreateCatogoryDto } from './dto/create-catogory.dto';
import { UpdateCatogoryDto } from './dto/update-catogory.dto';

@Injectable()
export class CatogoriesService {
  create(createCatogoryDto: CreateCatogoryDto) {
    return 'This action adds a new catogory';
  }

  findAll() {
    return `This action returns all catogories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catogory`;
  }

  update(id: number, updateCatogoryDto: UpdateCatogoryDto) {
    return `This action updates a #${id} catogory`;
  }

  remove(id: number) {
    return `This action removes a #${id} catogory`;
  }
}
