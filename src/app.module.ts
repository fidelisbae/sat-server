import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Exam } from './entities/exam.entity';
import { QuestionModule } from './question/question.module';
import { ExamModule } from './exam/exam.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sat_db',
      entities: [Question, Exam],
      synchronize: true,
      logging: true,
    }),
    QuestionModule,
    ExamModule,
  ],
})
export class AppModule {}
