import React from "react";
import {
  Datagrid,
  List,
  TextField,
  ImageField,
  NumberField,
  DateField,
  TopToolbar,
  CreateButton,
  ExportButton,
  DeleteButton,
  FunctionField,
  EditButton
} from "react-admin";

const RecordingList = () => {
  const RecordingListActions = () => (
    <TopToolbar>
        <CreateButton />
        <ExportButton />
        <DeleteButton selection="multiple" mutationMode="pessimistic"/>
    </TopToolbar>
);
    
      return (
    <List actions={<RecordingListActions />}>
      <Datagrid>
        <ImageField source="imageSrc" label="Image"/>
        <TextField source="title" label="Title"/>
        <TextField source="instructors" label="Instructor"/>
        <TextField source="videoUrl" label="VideoURL"/>
        <DateField source="webinarDate" label="Webinar Date" />
        <EditButton/>
      </Datagrid>
    </List>
)};

export default RecordingList;
