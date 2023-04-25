import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Modular } from '../modular/modular.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'text', nullable: true })
  passage: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  content: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_A: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_B: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_C: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_D: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  correct_answer: string;

  @ManyToOne(() => Modular)
  @JoinColumn({ name: 'modular_id', referencedColumnName: 'id' })
  modular: Modular;

  @Column({ type: 'int', nullable: false })
  modular_id: number;
}
