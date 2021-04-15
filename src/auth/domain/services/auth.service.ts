import { Injectable } from '@nestjs/common';
import { AuthenticatedUserDto } from 'src/auth/data/dto/authenticated-user.dto';
import { CredentialsDto } from 'src/auth/data/dto/credentials.dto';
import { ValidCredentialsDto } from 'src/auth/data/dto/valid-credentials.dto';
import { AuthJsonRepository } from '../repositories/auth-json.repository';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthJsonRepository) {
    this.authRepository = authRepository;
  }
  async getCredentials({ email, password }: CredentialsDto) {
    const credentials = await this.authRepository.getCredentials({
      email,
      password,
    });

    return credentials;
  }

  async authenticate(
    credentials: ValidCredentialsDto,
  ): Promise<AuthenticatedUserDto> {
    const authenticatedUser = await this.authRepository.authenticate(
      credentials,
    );

    return authenticatedUser;
  }
}
