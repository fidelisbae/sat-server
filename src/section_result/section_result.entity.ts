import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Section } from '../section/section.entity';
import { ExamResult } from '../exam_result/exam_result.entity';

@Entity()
export class SectionResult {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'section_id', referencedColumnName: 'id' })
  section: Section;

  @Column({ type: 'int', nullable: false })
  section_id: number;

  @ManyToOne(() => ExamResult)
  @JoinColumn({ name: 'exam_result_id', referencedColumnName: 'id' })
  exam_result: ExamResult;

  @Column({ type: 'int', nullable: false })
  exam_result_id: number;
}
