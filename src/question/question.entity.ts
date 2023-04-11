import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Module } from '../module/module.entity';

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

  @ManyToOne(() => Module)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module: Module;

  @Column({ type: 'int', nullable: false })
  module_id: number;
}
