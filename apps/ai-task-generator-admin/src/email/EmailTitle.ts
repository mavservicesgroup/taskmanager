import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "subject";

export const EmailTitle = (record: TEmail): string => {
  return record.subject?.toString() || String(record.id);
};
