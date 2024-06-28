
import * as React from 'react';
import { Edit, SimpleForm, TextInput,required  } from 'react-admin';
const RecordingEdit = ({ id }) => (
  <Edit id={id} title="Edit Record">
    <SimpleForm>
      <TextInput source="videoUrl" label="Video" validate={[required()]} />
      <TextInput source="courseId" label="Course ID" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export default RecordingEdit;