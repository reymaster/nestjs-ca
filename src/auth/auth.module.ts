import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './domain/services/auth.service';
import { AuthJsonRepository } from './domain/repositories/auth-json.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthJsonRepository],
})
export class AuthModule {}
