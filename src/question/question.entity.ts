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

  @Column({ type: 'text', nullable: false })
  passage: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  content: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_3: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_4: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  choice_5: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  correct_answer: string;

  @ManyToOne(() => Modular)
  @JoinColumn({ name: 'modular_id', referencedColumnName: 'id' })
  module: Modular;

  @Column({ type: 'int', nullable: false })
  modular_id: number;
}
