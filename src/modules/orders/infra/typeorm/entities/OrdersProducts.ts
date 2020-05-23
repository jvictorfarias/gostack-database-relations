import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, order => order.order_products)
  order: Order;

  @ManyToOne(() => Product, product => product.order_products)
  product: Product;

  @Column()
  @JoinColumn()
  product_id: string;

  order_id: string;

  price: number;

  quantity: number;

  created_at: Date;

  updated_at: Date;
}

export default OrdersProducts;
