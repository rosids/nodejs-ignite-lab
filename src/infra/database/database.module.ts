import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      // toda vez que uma classe precisar do NotificationsRepository irá devolver o PrismaNotificationsRepository
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  // informa quais provides devem ser compartilhados com os módulos que importarem ele
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
