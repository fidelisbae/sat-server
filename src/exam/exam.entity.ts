import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Question } from 'src/question/question.entity';
import { ExamResult } from 'src/exam_result/exam_result.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];

  @OneToMany(() => ExamResult, (examResult) => examResult.exam)
  exam_results: ExamResult[];
}
