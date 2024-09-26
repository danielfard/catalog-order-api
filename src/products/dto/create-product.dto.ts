import { ApiProperty } from '@nestjs/swagger'; // Importa ApiProperty

export class CreateProductDto {
  @ApiProperty({ description: 'The name of the product' }) // Decorador para cada propiedad
  name: string;

  @ApiProperty({ description: 'The price of the product', example: 100.0 })
  price: number;

  @ApiProperty({ description: 'The description of the product' })
  description: string;
}
