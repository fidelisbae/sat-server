import { Module } from '@nestjs/common';

import { ModularController } from './modular.controller';
import { ModularService } from './modular.service';

@Module({
  controllers: [ModularController],
  providers: [ModularService],
})
export class ModularModule {}
