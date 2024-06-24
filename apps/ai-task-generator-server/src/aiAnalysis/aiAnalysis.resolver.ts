import * as graphql from "@nestjs/graphql";
import { AiAnalysisResolverBase } from "./base/aiAnalysis.resolver.base";
import { AiAnalysis } from "./base/AiAnalysis";
import { AiAnalysisService } from "./aiAnalysis.service";

@graphql.Resolver(() => AiAnalysis)
export class AiAnalysisResolver extends AiAnalysisResolverBase {
  constructor(protected readonly service: AiAnalysisService) {
    super(service);
  }
}
