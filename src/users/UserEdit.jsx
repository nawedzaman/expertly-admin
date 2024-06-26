import React from 'react';
import { Edit, SimpleForm, TextInput, EmailField } from 'react-admin';
const UserEdit = ({ id, ...props }) => (
    <Edit id={id} {...props}>
      <SimpleForm>
        <TextInput source="email" disabled /> {/* Display email but make it read-only */}
        <TextInput source="fullName" />
        <TextInput source="phone" label="Phone Number" />
      </SimpleForm>
    </Edit>
  );
  
  export default UserEdit;