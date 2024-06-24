import { AiAnalysisUpdateManyWithoutTasksInput } from "./AiAnalysisUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  aiAnalyses?: AiAnalysisUpdateManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title?: string | null;
};
