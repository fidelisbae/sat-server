import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Modular } from '../modular/modular.entity';
import { SectionResult } from '../section_result/section_result.entity';

@Entity()
export class ModularResult {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Modular)
  @JoinColumn({ name: 'modular_id', referencedColumnName: 'id' })
  modular: Modular;

  @Column({ type: 'int', nullable: false })
  modular_id: number;

  @ManyToOne(() => SectionResult)
  @JoinColumn({ name: 'section_result_id', referencedColumnName: 'id' })
  section_result: SectionResult;

  @Column({ type: 'int', nullable: false })
  section_result_id: number;
}
