import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, CheckboxGroupInput , ImageInput, ImageField, ArrayField, Datagrid,FunctionField,DateInput,NumberField,TextField,ReferenceField, TabbedForm,List } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text'; // Assuming RichTextInput is imported correctly
const websites = [
  { id: 1, name: 'goexpertly' },
  { id: 2, name: 'eductre' },
  { id: 3, name: 'gradeage' },
  { id: 4, name: 'theprofess' },
  { id: 5, name: 'mytutorstation' },
  { id: 6, name: 'wishlearners' },
  { id: 7, name: 'wiservisions' },
  { id: 8, name: 'meritcourses' },
  { id: 9, name: 'learnyng' },
  { id: 10, name: 'tutorshour' },
];
const CourseEdit = (props) => {
  const [siteId, setSiteId] = React.useState([]);
  const validateCourse = (values) => {
    const errors = {};
    if (!values.siteId|| values.siteId.length === 0) {
      errors.siteId = 'Please select at least one option.';
    }
    if (!values.description|| values.description.length === 0) {
      errors.description = 'Course description is missing';
    }
     return errors;
  };
  const handleCheckboxChange = (event) => {
    setSiteId(event.target.value); // Update siteId with selected values
  }
 return( <Edit {...props}>
    <SimpleForm validate={validateCourse}>
      <TextInput source="title" label="Course Title" stripTags required="true"/>
      <TextInput source="description" label="Course Description" stripTags required="true"/>
      <ImageInput source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput>
      <p style={{ fontSize: '0.75em',color: 'grey' }}>Current Image</p>
      <ImageField source="imageSrc" title="image"/>
      <NumberInput source="duration" label="Course Duration (in hours)" />
      <NumberInput source="price" label="Course Price" required="true"/>
      <DateInput source="webinarDate" label="Webinar Date" />
      <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" />
      <CheckboxGroupInput
        source="siteId"
        choices={websites}
        optionText="name"
        optionValue="id"
        value={siteId} // Set the current selected value
        onChange={handleCheckboxChange} // Handle checkbox group changes
      />
      <p style={{ fontSize: '0.75em',color: 'grey' }}>Selected Sites</p>
      <FunctionField 
          label="Sites" 
          render={record => record.Sites.map(site => site.name).join(', ')} 
        />
      <TextInput source="features" label="Course Features" stripTags/>
      <TextInput source="what_you_will_learn" label="What You Will Learn" stripTags/>
      <TextInput source="content" label="Course Content"stripTags />
      <TextInput source="instructors" label="Instructors" stripTags/>
      <h2>Pricing Details</h2>
        <ArrayField source="Pricings" label="Items in Promotion">
        <List dataSource="Pricings" hasCreate={false} hasEdit={true} hasDelete={true}>
        </List>
          <Datagrid>
            <NumberField source="attendeeCount" label="Attendee Count" />
            <NumberField source="price" label="Price" />
            <TextField source="sessionType" label="Session Type" />
          </Datagrid>
        </ArrayField>
    </SimpleForm>
  </Edit>
)};

export default CourseEdit;