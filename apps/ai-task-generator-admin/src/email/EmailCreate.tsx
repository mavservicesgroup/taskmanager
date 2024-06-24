import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AiAnalysisTitle } from "../aiAnalysis/AiAnalysisTitle";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="aiAnalysis.id"
          reference="AiAnalysis"
          label="AiAnalysis"
        >
          <SelectInput optionText={AiAnalysisTitle} />
        </ReferenceInput>
        <TextInput label="body" multiline source="body" />
        <TextInput label="recipient" source="recipient" type="email" />
        <TextInput label="sender" source="sender" type="email" />
        <DateTimeInput label="sentDate" source="sentDate" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
