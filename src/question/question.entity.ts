import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Exam } from '../exam/exam.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  section: string;

  @Column({ type: 'int', nullable: false })
  module: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'text', nullable: true })
  passage: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  content: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  choice_A: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  choice_B: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  choice_C: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  choice_D: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  correct_answer: string;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: 'exam_id', referencedColumnName: 'id' })
  exam: Exam;

  @Column({ type: 'int', nullable: false })
  exam_id: number;
}
