import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question/question.entity';
import { Exam } from './exam/exam.entity';
import { QuestionModule } from './question/question.module';
import { ExamModule } from './exam/exam.module';
import { APP_PIPE } from '@nestjs/core';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sat_db',
      entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    QuestionModule,
    ExamModule,
    UserModule,
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
