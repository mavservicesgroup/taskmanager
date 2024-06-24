import { EmailCreateNestedManyWithoutAiAnalysesInput } from "./EmailCreateNestedManyWithoutAiAnalysesInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type AiAnalysisCreateInput = {
  emails?: EmailCreateNestedManyWithoutAiAnalysesInput;
  keyTasks?: InputJsonValue;
  sentiment?: "Option1" | null;
  summary?: string | null;
  task?: TaskWhereUniqueInput | null;
};
