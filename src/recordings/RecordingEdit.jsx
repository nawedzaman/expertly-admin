import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  FileField,
  FileInput,
  TextField,
  useRecordContext,
  WithRecord,
} from "react-admin";

const RecordingEdit = ({ id }) => {
  return (
    <Edit id={id} title="Edit Record">
      <SimpleForm>
        <span>
          Course ID:{" "}
          <TextField
            source="courseId"
            label="CourseID"
            style={{ fontWeight: "bold" }}
          />
        </span>
        <WithRecord
          label="author"
          render={(record) => (
            <video src={record.videoUrl} controls width="320" height="240">
              Your browser does not support the video tag.
            </video>
          )}
        />
        <span>
          Video URL: <TextField source="videoUrl" label="Video" />{" "}
        </span>
        <FileInput source="video" label="Upload Recording">
          <FileField source="src" title="title" validate={[required()]} />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};

export default RecordingEdit;
