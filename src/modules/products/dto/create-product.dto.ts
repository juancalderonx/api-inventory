import { Transform } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEnum,
  Length,
  IsOptional,
  Min,
  ArrayMinSize,
  IsArray,
} from 'class-validator';
import { Status } from 'src/common/enum/status-enum';

export class CreateProductDto {
  @IsString()
  @Length(1, 255)
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString()
  @Length(0, 300)
  @IsOptional()
  readonly description?: string;

  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsNumber()
  readonly stock: number;

  @IsEnum(Status)
  readonly status: Status;

  @IsArray()
  @ArrayMinSize(1)
  readonly categories: number[];
}
