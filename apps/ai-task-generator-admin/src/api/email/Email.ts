import { AiAnalysis } from "../aiAnalysis/AiAnalysis";

export type Email = {
  aiAnalysis?: AiAnalysis | null;
  body: string | null;
  createdAt: Date;
  id: string;
  recipient: string | null;
  sender: string | null;
  sentDate: Date | null;
  subject: string | null;
  updatedAt: Date;
};
