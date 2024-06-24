import { Email } from "../email/Email";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type AiAnalysis = {
  createdAt: Date;
  emails?: Array<Email>;
  id: string;
  keyTasks: JsonValue;
  sentiment?: "Option1" | null;
  summary: string | null;
  task?: Task | null;
  updatedAt: Date;
};
