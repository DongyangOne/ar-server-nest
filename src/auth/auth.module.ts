import { Module } from '@nestjs/common';
import { AuthService } from './application/auth.service';
import { AuthController } from './ui/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UserRepository } from './infrastructure/auth.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
