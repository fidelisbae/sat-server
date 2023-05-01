import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ExamResult } from 'src/exam_result/exam_result.entity';

@Entity()
export class QuestionResult {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'varchar', nullable: false })
  your_answer: string;

  @ManyToOne(() => ExamResult, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'exam_result_id', referencedColumnName: 'id' })
  exam_result: ExamResult;

  @Column({ type: 'int', nullable: false })
  exam_result_id: number;
}
