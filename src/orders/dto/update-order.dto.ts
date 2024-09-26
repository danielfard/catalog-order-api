import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({ description: 'Estado de la orden', example: 'completado' })
  status: string;
}
