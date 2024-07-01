import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  FileInput,
  FileField,
  useGetList,
  SelectInput,
  ReferenceInput,
} from "react-admin";
const RecordingCreate = () => {
  return (
    <Create title="Upload a New Recording" redirect="list">
      <SimpleForm>
        <FileInput source="video" label="Upload Recording">
          <FileField source="src" title="title" validate={[required()]} />
        </FileInput>
        <ReferenceInput source="title" reference="courses">
          <SelectInput 
          optionText="title" resettable/>
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default RecordingCreate;
