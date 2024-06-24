import { AiAnalysisWhereInput } from "./AiAnalysisWhereInput";
import { AiAnalysisOrderByInput } from "./AiAnalysisOrderByInput";

export type AiAnalysisFindManyArgs = {
  where?: AiAnalysisWhereInput;
  orderBy?: Array<AiAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
