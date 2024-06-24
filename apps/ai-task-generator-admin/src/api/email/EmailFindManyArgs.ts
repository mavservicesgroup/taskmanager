import { EmailWhereInput } from "./EmailWhereInput";
import { EmailOrderByInput } from "./EmailOrderByInput";

export type EmailFindManyArgs = {
  where?: EmailWhereInput;
  orderBy?: Array<EmailOrderByInput>;
  skip?: number;
  take?: number;
};
