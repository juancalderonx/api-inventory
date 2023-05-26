import { Transform } from 'class-transformer';
import {
  IsString,
  IsEnum,
  Length,
  IsOptional,
  IsArray,
  ArrayMinSize,
} from 'class-validator';
import { Status } from 'src/common/enum/status-enum';

export class CreateCategoryDTO {
  @IsString()
  @Length(1, 255)
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString()
  @Length(0, 300)
  @IsOptional()
  readonly description?: string;

  @IsEnum(Status)
  readonly status: Status;
}
