import { EmailListRelationFilter } from "../email/EmailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type AiAnalysisWhereInput = {
  emails?: EmailListRelationFilter;
  id?: StringFilter;
  keyTasks?: JsonFilter;
  sentiment?: "Option1";
  summary?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
};
