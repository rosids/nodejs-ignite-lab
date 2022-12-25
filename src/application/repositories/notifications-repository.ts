import { Notification } from '../entities/notifications';

// define os métodos da notificação, mas não implementa-os
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
}
