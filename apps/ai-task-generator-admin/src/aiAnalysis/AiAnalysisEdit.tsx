import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";
import { TaskTitle } from "../task/TaskTitle";

export const AiAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="emails"
          reference="Email"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailTitle} />
        </ReferenceArrayInput>
        <div />
        <SelectInput
          source="sentiment"
          label="sentiment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="summary" multiline source="summary" />
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
