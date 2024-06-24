import { AiAnalysis as TAiAnalysis } from "../api/aiAnalysis/AiAnalysis";

export const AIANALYSIS_TITLE_FIELD = "id";

export const AiAnalysisTitle = (record: TAiAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
