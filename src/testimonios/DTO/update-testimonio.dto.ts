import { IsString } from 'class-validator'; //hay que ejecutar  "npm install class-validator class-transformer para que esto funcione"
import { IsOptional } 

export class UpdateTestimonioDto {
  @IsOptional()
  @IsString() //si las validaciones siguen dando errores se pueden borrar
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
