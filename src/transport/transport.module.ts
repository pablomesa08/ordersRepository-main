import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from 'process';
import { NATS_SERVER, envs } from 'src/config';

@Module({
    imports:[
        ClientsModule.register([
            {
                name: NATS_SERVER,
                transport: Transport.NATS,
                options: {
                    url: env.NATS_SERVER,
                },
            },
        ]),
    ],
    exports: [
        ClientsModule.register([
            {
                name: NATS_SERVER,
                transport: Transport.NATS,
                options: {
                    url: envs.natsServer,
                },
            },
        ])
    ]
})
export class TransportModule {}
