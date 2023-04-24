import { Module } from '@nestjs/common';
import { ModularResultController } from './modular_result.controller';
import { ModularResultService } from './modular_result.service';

@Module({
  controllers: [ModularResultController],
  providers: [ModularResultService]
})
export class ModularResultModule {}
