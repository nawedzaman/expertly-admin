import React from "react";
import {
  List,
  Datagrid,
  FunctionField,
  EditButton,
  DeleteButton,
  Button,
} from "react-admin";
import VisitorIcon from '@mui/icons-material/Collections';

const EnrollmentList = () => (
  <List>
    <Datagrid>
      <FunctionField label="User ID" render={(record) => record.User.id} />
      <FunctionField
        label="User Email"
        render={(record) => record.User.fullName}
      />
      <FunctionField
        label="Course Title"
        render={(record) => record.Course.title}
      />
      <FunctionField
        label="View Invoice"
        render={(record) => {
          if (!record) return null; // Handle potential undefined record
          return (
            <a
              href={record.invoiceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
               <VisitorIcon/>
            </a>
          );
        }}
      />
      <EditButton basePath="/enrollments" />
      <DeleteButton basePath="/enrollments" />
    </Datagrid>
  </List>
);

export default EnrollmentList;
