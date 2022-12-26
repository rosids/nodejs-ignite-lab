import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notifications';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  // converte a entidade de notification da pasta application/entities para o prisma
  // camada de persistência
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  // converte a entidade de notification do prisma para notification da pasta application/entities
  // camada de domínio
  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
