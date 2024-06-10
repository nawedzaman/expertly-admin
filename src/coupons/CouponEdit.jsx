import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, SelectInput, BooleanInput } from 'react-admin';

const CouponEdit = ({ id }) => (
  <Edit id={id} title="Edit Coupon">
    <SimpleForm>
      <TextInput source="code" label="Coupon Code" validate={[required()]} />
      <SelectInput
        source="discountType"
        label="Discount Type"
        validate={[required()]}
        choices={[
          { value: 'percentage', label: 'Percentage' },
          { value: 'fixed_amount', label: 'Fixed Amount' },
        ]}
        optionText="label"
        optionValue="value"
      />
      <TextInput source="discountValue" label="Discount Value" validate={[required(), isNumber()]} />
      <TextInput source="description" label="Description" />
      <DateInput source="startDate" label="Start Date" validate={[required()]} />
      <DateInput source="endDate" label="End Date" validate={[required()]} />
      <BooleanInput source="isActive" label="Is Active?" />
    </SimpleForm>
  </Edit>
);

const required = () => ({ required: true });
const isNumber = () => ({ type: 'number' }); // Validation function for discountValue

export default CouponEdit;