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

    const payload = {
      sub: user.id,
    };

    const access_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRED_IN,
    });

    return {
      access_token,
    };
  }
}
