
import * as React from 'react';
import { Create, SimpleForm, TextInput,required, FileInput, FileField  } from 'react-admin';
const RecordingCreate = () => (
  <Create title="Upload a New Recording" redirect="list">
    <SimpleForm>
    <FileInput source="video" label="Upload Recording">
        <FileField source="src" title="title" validate={[required()]} />
    </FileInput>
      <TextInput source="courseId" label="Course ID" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default RecordingCreate;