import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AIANALYSIS_TITLE_FIELD } from "./AiAnalysisTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";

export const AiAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="keyTasks" source="keyTasks" />
        <TextField label="sentiment" source="sentiment" />
        <TextField label="summary" source="summary" />
        <ReferenceField label="Task" source="task.id" reference="Task">
          <TextField source={TASK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Email"
          target="aiAnalysisId"
          label="Emails"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
