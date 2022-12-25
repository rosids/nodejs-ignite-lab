import { Notification } from '@application/entities/notifications';

export class NotificationViewModel {
  // STATIC POIS NÃO PRECISA INSTANCIAR A CLASSE
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
