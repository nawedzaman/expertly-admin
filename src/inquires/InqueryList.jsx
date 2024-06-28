import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  FunctionField,
  EditButton,
  DeleteButton,
} from "react-admin";

const InqueryList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Name" />
      <EmailField source="email" label="Email" />
      <TextField source="current_role" label="Current Role" />
      <TextField source="company_name" label="Company Name" />
      <TextField source="company_address" label="Company Address" />
      <TextField source="city" label="City" />
      <TextField source="country" label="Country" />
      <FunctionField
        label="Message"
        render={record => (
          <span
            dangerouslySetInnerHTML={{ __html: record.message }} // Handle HTML content safely
          />
        )}
      />
      <DateField source="createdAt" label="Submitted At" />
      <DeleteButton basePath="/contacts" />
    </Datagrid>
  </List>
);
export default InqueryList;