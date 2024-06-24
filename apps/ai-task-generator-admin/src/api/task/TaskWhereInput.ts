import { AiAnalysisListRelationFilter } from "../aiAnalysis/AiAnalysisListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  aiAnalyses?: AiAnalysisListRelationFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  status?: "Option1";
  title?: StringNullableFilter;
};
