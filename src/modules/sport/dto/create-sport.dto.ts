import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsString,
  Length,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Status } from 'src/common/enum/status-enum';

export class CreateSportDto {
  @IsString()
  @Length(1, 255)
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsEnum(Status)
  readonly status: Status;

  @IsArray()
  @ArrayMinSize(1)
  readonly categories: number[];
}
