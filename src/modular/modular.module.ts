import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModularController } from './modular.controller';
import { ModularService } from './modular.service';
import { Modular } from './modular.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modular])],
  controllers: [ModularController],
  providers: [ModularService],
})
export class ModularModule {}
