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
  DeleteButton
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
        <ImageField source="imageSrc" />
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
        <NumberField source="rating" />
        <NumberField source="numReviews" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
)};

export default CourseList;
