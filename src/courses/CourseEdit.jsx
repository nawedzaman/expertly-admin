import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, CheckboxGroupInput , ImageInput, ImageField, EditButton, DeleteButton,FunctionField,DateInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text'; // Assuming RichTextInput is imported correctly
const websites = [
  { id: "1", name: 'goexpertly' },
  { id: "2", name: 'eductre' }
];
const CourseEdit = (props) => {
  const [siteId, setSiteId] = React.useState([]);
  const handleCheckboxChange = (event) => {
    setSiteId(event.target.value); // Update siteId with selected values
  }
 return( <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Course Title" stripTags/>
      <RichTextInput source="description" label="Course Description" stripTags/>
      <ImageInput source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput>
      <p style={{ fontSize: '0.75em',color: 'grey' }}>Current Image</p>
      <ImageField source="imageSrc" title="image"/>
      <NumberInput source="duration" label="Course Duration (in hours)" />
      <NumberInput source="price" label="Course Price" />
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
      <RichTextInput source="features" label="Course Features" stripTags/>
      <RichTextInput source="what_you_will_learn" label="What You Will Learn" stripTags/>
      <RichTextInput source="content" label="Course Content"stripTags />
      <TextInput source="instructors" label="Instructors" stripTags/>
    </SimpleForm>
  </Edit>
)};

export default CourseEdit;