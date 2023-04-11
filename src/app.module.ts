import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';

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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sat_db',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [User, Exam, Section, Modular, Question],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ExamModule,
    SectionModule,
    ModularModule,
    QuestionModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
