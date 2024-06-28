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

const websites = [
  { id: 1, name: 'goexpertly' },
  { id: 2, name: 'eductre' },
  { id: 3, name: 'Website 3' },
  { id: 4, name: 'Website 4' },
];
const EnrollmentList = () => (
  <List>
    <Datagrid>
      <FunctionField label="User" render={(record) => record.User.fullName} />
      <FunctionField
        label="Email"
        render={(record) => record.User.email}
      />
      <FunctionField
      label="Phone"
      render={(record) => record.User.phone}
      />
      <FunctionField
      label="Site"
      source="siteId"
      render={record=>websites.find(w=>w.id===record.User.siteId)?.name}
      />
      <FunctionField
        label="Course"
        render={(record) => record.Course.title}
      />
      <FunctionField
        label="Invoice"
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
    </Datagrid>
  </List>
);

export default EnrollmentList;
