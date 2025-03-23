/* eslint-disable prettier/prettier */
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  sendNotificationToClients(notification: any) {
    this.server.emit('new-notification', {
      message: 'New notification from Web Socket',
      notification,
    });
  }
}
