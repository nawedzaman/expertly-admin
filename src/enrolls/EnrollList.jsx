import React from 'react';
import { List, Datagrid, FunctionField, EditButton, DeleteButton } from 'react-admin';


const EnrollmentList = () => (
  <List>
    <Datagrid>
            <FunctionField
                label="User ID"
                render={record => record.User.id}
            />
            <FunctionField
                label="User Email"
                render={record => record.User.fullName}
            />
            <FunctionField
                label="Course Title"
                render={record => record.Course.title}
            />
      <EditButton basePath="/enrollments" />
      <DeleteButton basePath="/enrollments" />
    </Datagrid>
  </List>
);

export default EnrollmentList;