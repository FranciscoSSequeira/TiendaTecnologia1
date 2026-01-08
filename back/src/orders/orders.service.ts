import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async addOrder(userId: string, dto: CreateOrderDto) {
    
    const {  products } = dto

    return await this.ordersRepository.addOrder(userId, products)
  }

  async getOrder(orderId: string, userId: string) {

    const order = await this.ordersRepository.getOrder(orderId);
    if (!order || typeof order === 'string') {
      throw new NotFoundException('Order not found');
    }

    if (!order.user || order.user.id !== userId) {
      throw new ForbiddenException('No tienes permiso para ver esta orden');
    }
    return order;
  }

  async findByUser(userId: string) {
    return await this.ordersRepository.findByUser(userId);
}
}
