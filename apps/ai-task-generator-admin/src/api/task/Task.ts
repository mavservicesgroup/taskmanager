import { AiAnalysis } from "../aiAnalysis/AiAnalysis";

export type Task = {
  aiAnalyses?: Array<AiAnalysis>;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
