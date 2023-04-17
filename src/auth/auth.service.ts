import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(id: string, password: string) {
    const user = await this.userService.findOne(id);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, is_teacher: user.is_teacher };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
