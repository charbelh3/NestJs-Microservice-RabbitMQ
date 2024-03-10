import { Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';

@Injectable()
export class AppService {
  orders: OrderDto[] = [];

  handleOrderPlaced(order: OrderDto) {
    console.log(`Received a new order - customer: ${order.email}`);
    this.orders.push(order);
    //Send email
  }

  getOrders() {
    return this.orders;
  }
}
