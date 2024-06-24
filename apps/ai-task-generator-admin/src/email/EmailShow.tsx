import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AIANALYSIS_TITLE_FIELD } from "../aiAnalysis/AiAnalysisTitle";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="AiAnalysis"
          source="aianalysis.id"
          reference="AiAnalysis"
        >
          <TextField source={AIANALYSIS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="recipient" source="recipient" />
        <TextField label="sender" source="sender" />
        <TextField label="sentDate" source="sentDate" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
