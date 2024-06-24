import { AiAnalysisWhereUniqueInput } from "../aiAnalysis/AiAnalysisWhereUniqueInput";

export type EmailUpdateInput = {
  aiAnalysis?: AiAnalysisWhereUniqueInput | null;
  body?: string | null;
  recipient?: string | null;
  sender?: string | null;
  sentDate?: Date | null;
  subject?: string | null;
};
