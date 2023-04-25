import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Question } from '../question/question.entity';
import { Section } from '../section/section.entity';

@Entity()
export class Modular {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'section_id', referencedColumnName: 'id' })
  section: Section;

  @Column({ type: 'int', nullable: false })
  section_id: number;

  @OneToMany(() => Question, (question) => question.modular)
  questions: Question[];
}
