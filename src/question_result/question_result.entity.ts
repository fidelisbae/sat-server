import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Question } from '../question/question.entity';
import { ModularResult } from '../modular_result/modular_result.entity';

@Entity()
export class QuestionResult {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id', referencedColumnName: 'id' })
  question: Question;

  @Column({ type: 'int', nullable: false })
  question_id: number;

  @ManyToOne(() => ModularResult)
  @JoinColumn({ name: 'modular_result_id', referencedColumnName: 'id' })
  modular_result: ModularResult;

  @Column({ type: 'int', nullable: false })
  modular_result_id: number;
}
