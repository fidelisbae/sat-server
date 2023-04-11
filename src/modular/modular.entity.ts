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

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  number: number;

  @OneToMany(() => Question, (question) => question.module)
  questions: Question[];

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'section_id', referencedColumnName: 'id' })
  section: Section;

  @Column({ type: 'int', nullable: false })
  section_id: number;
}
