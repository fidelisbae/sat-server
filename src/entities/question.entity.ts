import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exam } from './exam.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'text', nullable: false })
  content: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  choice_1: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  choice_2: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  choice_3: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  choice_4: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  correct_answer: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_vertical: boolean;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_subjective: boolean;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: 'exam_id', referencedColumnName: 'id' })
  exam: Exam;

  @Column({ type: 'int', nullable: false })
  exam_id: number;
}
