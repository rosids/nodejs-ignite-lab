import { Notification } from '../entities/notifications';

// define os métodos da notificação, mas não implementa-os
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
