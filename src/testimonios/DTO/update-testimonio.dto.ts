import { IsString } from 'class-validator';

export class UpdateTestimonioDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
