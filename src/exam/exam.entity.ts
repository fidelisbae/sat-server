import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Question } from 'src/question/question.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];
}
