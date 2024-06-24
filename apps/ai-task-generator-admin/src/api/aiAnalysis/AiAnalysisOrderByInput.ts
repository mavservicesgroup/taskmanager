import { SortOrder } from "../../util/SortOrder";

export type AiAnalysisOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keyTasks?: SortOrder;
  sentiment?: SortOrder;
  summary?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
