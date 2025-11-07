import{IsString}
export class UpdateTestimonioDto{
    @IsString()
    name: string;

    @IsString()
    description: string;
}