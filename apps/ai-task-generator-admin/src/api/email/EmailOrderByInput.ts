import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  aiAnalysisId?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  sentDate?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
