import { AiAnalysisWhereUniqueInput } from "../aiAnalysis/AiAnalysisWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailWhereInput = {
  aiAnalysis?: AiAnalysisWhereUniqueInput;
  body?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
  sentDate?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};
