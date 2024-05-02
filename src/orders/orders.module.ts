import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVER, PRODUCT_SERVICE, envs } from 'src/config';
import { TransportModule } from 'src/transport/transport.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    // ClientsModule.register......
    TransportModule,
  ]
})
export class OrdersModule {}
