import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Exam } from '../exam/exam.entity';
import { User } from '../user/user.entity';
import { QuestionResult } from '../question_result/question_result.entity';

@Entity()
export class ExamResult {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ type: 'varchar', nullable: false })
  user_id: string;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: 'exam_id', referencedColumnName: 'id' })
  exam: Exam;

  @Column({ type: 'int', nullable: false })
  exam_id: number;

  @OneToMany(
    () => QuestionResult,
    (questionResult) => questionResult.exam_result,
    { onDelete: 'CASCADE' },
  )
  question_results: QuestionResult[];
}
