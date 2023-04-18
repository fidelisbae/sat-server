import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './auto.dto';
import { BaseResponse } from '../common/types/response';
import { Login } from '../common/types/login';
import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { Public } from '../common/utils/public';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiOperation({
    summary: 'Login',
  })
  @ApiTags('auth')
  @Post('/auth/login')
  async login(@Body() body: LoginDto) {
    const { id, password } = body;

    const data = await this.authService.login(id, password);
    console.log(data);

    return <BaseResponse<Login>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data,
    };
  }
}
