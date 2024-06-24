import { Module } from "@nestjs/common";
import { AiAnalysisModuleBase } from "./base/aiAnalysis.module.base";
import { AiAnalysisService } from "./aiAnalysis.service";
import { AiAnalysisController } from "./aiAnalysis.controller";
import { AiAnalysisResolver } from "./aiAnalysis.resolver";

@Module({
  imports: [AiAnalysisModuleBase],
  controllers: [AiAnalysisController],
  providers: [AiAnalysisService, AiAnalysisResolver],
  exports: [AiAnalysisService],
})
export class AiAnalysisModule {}
