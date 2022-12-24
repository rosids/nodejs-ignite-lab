import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  // por usar o SendNotification no providers e a classe do SendNotification necessitar do NotificationsRepository poderia utilizar a mesma estratégia do DatabaseModule usando o provide ou simplesmente adicionar o DatabaseModule no imports
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  // para que possa ser feita a injeção de dependência no controller é necessário adicioná-lo no provider
  providers: [SendNotification],
})
export class HttpModule {}
