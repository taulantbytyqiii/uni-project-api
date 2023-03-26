import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:O1JmKkovYCkLQ3zC@cluster0.umxcb1j.mongodb.net/test',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
