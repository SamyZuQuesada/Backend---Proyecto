import { IsString } from 'class-validator'; //hay que ejecutar  "npm install class-validator class-transformer para que esto funcione"

export class UpdateTestimonioDto {
  @IsString() //si las validaciones siguen dando errores se pueden borrar
  name: string;

  @IsString()
  description: string;
}
