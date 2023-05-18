import { PartialType } from '@nestjs/mapped-types';
import { CreateCatogoryDto } from './create-catogory.dto';

export class UpdateCatogoryDto extends PartialType(CreateCatogoryDto) {}
