import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find(); // Devuelve todas las órdenes
  }

  findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOneBy({ id }); // Encuentra una orden por su ID
  }

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.ordersRepository.create(createOrderDto); // Crea una nueva orden
    return this.ordersRepository.save(order); // Guarda la orden en la base de datos
  }

  update(id: number, updateOrderDto: UpdateOrderDto): Promise<any> {
    return this.ordersRepository.update(id, updateOrderDto); // Actualiza una orden por su ID
  }

  remove(id: number): Promise<any> {
    return this.ordersRepository.delete(id); // Elimina una orden por su ID
  }
}
