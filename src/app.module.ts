import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { TransportModule } from './transport/transport.module';


@Module({
  imports: [OrdersModule, TransportModule],

})
export class AppModule {}
