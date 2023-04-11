import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Exam } from '../exam/exam.entity';
import { Modular } from '../modular/modular.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  subject: string;

  @OneToMany(() => Modular, (modular) => modular.section)
  modulars: Modular[];

  @ManyToOne(() => Exam)
  @JoinColumn({ name: 'exam_id', referencedColumnName: 'id' })
  exam: Exam;

  @Column({ type: 'int', nullable: false })
  exam_id: number;
}
