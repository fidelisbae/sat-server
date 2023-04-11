import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Section } from '../section/section.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(() => Section, (section) => section.exam)
  sections: Section[];
}
