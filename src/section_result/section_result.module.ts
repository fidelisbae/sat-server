import { Module } from '@nestjs/common';
import { SectionResultController } from './section_result.controller';
import { SectionResultService } from './section_result.service';

@Module({
  controllers: [SectionResultController],
  providers: [SectionResultService]
})
export class SectionResultModule {}
