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

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ type: 'varchar', nullable: false })
  user_id: string;

  @ManyToOne(() => Exam, { onDelete: 'CASCADE' })
  @JoinColumn([
    { name: 'exam_id', referencedColumnName: 'id' },
    { name: 'exam_name', referencedColumnName: 'name' },
  ])
  exam: Exam;

  @Column({ type: 'int', nullable: false })
  exam_id: number;

  @Column({ type: 'varchar', nullable: true })
  exam_name: string;

  @OneToMany(
    () => QuestionResult,
    (questionResult) => questionResult.exam_result,
  )
  question_results: QuestionResult[];
}
