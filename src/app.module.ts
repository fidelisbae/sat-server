import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './user/user.module';
import { ExamModule } from './exam/exam.module';
import { SectionModule } from './section/section.module';
import { ModularModule } from './modular/modular.module';
import { QuestionModule } from './question/question.module';
import { User } from './user/user.entity';
import { Exam } from './exam/exam.entity';
import { Section } from './section/section.entity';
import { Modular } from './modular/modular.entity';
import { Question } from './question/question.entity';
import { HttpExceptionFilter } from './common/filters/http.exception.filter';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './common/guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sat_db',
      entities: [User, Exam, Section, Modular, Question],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ExamModule,
    SectionModule,
    ModularModule,
    QuestionModule,
    AuthModule,
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
