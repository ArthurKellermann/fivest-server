/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationsGateway } from './gateways/notification.gateway';

@Module({
  providers: [NotificationsGateway],
  exports: [NotificationsGateway],
})
export class EventsModule {}
