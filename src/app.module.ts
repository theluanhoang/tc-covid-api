import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { DoctorsService } from './doctors/doctors.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [AuthModule, DoctorsModule],
  controllers: [AppController, AuthController, DoctorsController],
  providers: [AppService, DoctorsService],
})
export class AppModule {}
