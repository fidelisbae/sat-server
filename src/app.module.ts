import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './user/user.module';
import { ExamModule } from './exam/exam.module';
import { QuestionModule } from './question/question.module';
import { User } from './user/user.entity';
import { Exam } from './exam/exam.entity';
import { Question } from './question/question.entity';
import { HttpExceptionFilter } from './common/filters/http.exception.filter';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './common/guards/auth.guard';
import { ExamResult } from './exam_result/exam_result.entity';
import { QuestionResult } from './question_result/question_result.entity';
import { ExamResultModule } from './exam_result/exam_result.module';
import { QuestionResultModule } from './question_result/question_result.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sat-mysql',
      port: 3306,
      username: 'root',
      password: 'brix',
      database: 'sat_db',
      entities: [User, Exam, Question, ExamResult, QuestionResult],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ExamModule,
    QuestionModule,
    AuthModule,
    ExamResultModule,
    QuestionResultModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
