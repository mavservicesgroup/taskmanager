import { EmailUpdateManyWithoutAiAnalysesInput } from "./EmailUpdateManyWithoutAiAnalysesInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type AiAnalysisUpdateInput = {
  emails?: EmailUpdateManyWithoutAiAnalysesInput;
  keyTasks?: InputJsonValue;
  sentiment?: "Option1" | null;
  summary?: string | null;
  task?: TaskWhereUniqueInput | null;
};
