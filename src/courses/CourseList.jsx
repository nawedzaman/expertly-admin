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
  FunctionField
} from "react-admin";

const CourseList = () => {
  const CourseListActions = () => (
    <TopToolbar>
        <CreateButton />
        <ExportButton />
        <DeleteButton selection="multiple" mutationMode="pessimistic"/>
    </TopToolbar>
);
    
      return (
    <List actions={<CourseListActions />}>
      <Datagrid rowClick="edit">
        <TextField source="courseID" label="ID"/>
        <ImageField source="imageSrc" label="Image"/>
        <TextField source="title" />
        <TextField source="instructors" />
        <NumberField source="duration" />
        <NumberField
          source="price"
          options={{ style: "currency", currency: "USD" }}
        />
        <NumberField
          source="discountedPrice"
          options={{ style: "currency", currency: "USD" }}
        />
        <DateField source="webinarDate" label="Webinar Date" />
        <NumberField source="rating" />
        <NumberField source="numReviews" />
        <FunctionField 
                label="Sites" 
                render={record => record.Sites.map(site => site.name).join(', ')} 
        />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
)};

export default CourseList;
