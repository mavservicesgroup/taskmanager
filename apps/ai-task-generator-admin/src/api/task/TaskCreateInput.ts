import { AiAnalysisCreateNestedManyWithoutTasksInput } from "./AiAnalysisCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  aiAnalyses?: AiAnalysisCreateNestedManyWithoutTasksInput;
  description?: string | null;
  dueDate?: Date | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  title?: string | null;
};
