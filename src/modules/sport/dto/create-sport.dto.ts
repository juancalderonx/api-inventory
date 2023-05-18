import { IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateSportDto {
  @IsString()
  @Length(1, 255)
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString()
  readonly description: string;
}
