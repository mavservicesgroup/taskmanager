import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiAnalysisService } from "./aiAnalysis.service";
import { AiAnalysisControllerBase } from "./base/aiAnalysis.controller.base";

@swagger.ApiTags("aiAnalyses")
@common.Controller("aiAnalyses")
export class AiAnalysisController extends AiAnalysisControllerBase {
  constructor(protected readonly service: AiAnalysisService) {
    super(service);
  }
}
