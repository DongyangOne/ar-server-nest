import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure/auth.repository';

@Injectable()
export class AuthService {
    constructor (
        private readonly userRepository: UserRepository
    ) {}
}

