import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '../Service/app.service';
import { UserPageController } from 'src/Controller/userPages.controller';
import { PrismaModule } from './prisma.module';
import { TypeUserModule } from './typeUser.module';
import { AppController } from 'src/Controller/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    PrismaModule,
    TypeUserModule,
  ],
  controllers: [AppController, UserPageController],
  providers: [AppService],
})
export class AppModule {}
