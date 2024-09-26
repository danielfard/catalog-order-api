import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number; // ID del producto que se está ordenando

  @Column()
  quantity: number; // Cantidad de productos en la orden

  @Column('float')
  totalPrice: number; // Precio total de la orden

  @Column()
  customerName: string; // Nombre del cliente

  @Column()
  status: string; // Estado de la orden (ej. 'pendiente', 'completado')
}
