import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ description: 'ID del producto ordenado' })
  productId: number;

  @ApiProperty({ description: 'Cantidad de productos en la orden' })
  quantity: number;

  @ApiProperty({ description: 'Precio total de la orden', example: 100.0 })
  totalPrice: number;

  @ApiProperty({ description: 'Nombre del cliente' })
  customerName: string;

  @ApiProperty({ description: 'Estado de la orden', example: 'pendiente' })
  status: string;
}
