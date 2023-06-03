import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

import { Exam } from '../exam/exam.entity';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_teacher: boolean;

  @ManyToMany(() => Exam, (exam) => exam.users, { onDelete: 'CASCADE' })
  @JoinTable()
  exams: Exam[];
}
