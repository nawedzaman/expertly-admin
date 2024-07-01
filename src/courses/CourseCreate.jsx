
import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, ImageInput, ImageField,CheckboxGroupInput,DateInput  } from 'react-admin';
const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);
const websites = [
  { id: 1, name: 'goexpertly' },
  { id: 2, name: 'eductre' }
];
const CourseCreate = (props) => {
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
  return (<Create {...props}>
    <SimpleForm validate={validateCourse}>
      <TextInput source="title" label="Course Title" required="true"/>
      <TextInput source="description" label="Course Description" stripTags required="true"/>
      <ImageInput source="pictures" label="Related pictures" accept="image/*" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="duration" label="Course Duration (in mins)" />
      <NumberInput source="price" label="Course Price"  required="true"/>
      <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" />
      <CheckboxGroupInput
        source="siteId"
        label="Associated Websites" // Update label for clarity
        choices= {websites}
        optionText="name"
        optionValue="id"
      />
      <TextInput source="features" label="Course Features" stripTags/>
      <TextInput source="what_you_will_learn" label="What You Will Learn" stripTags/>
      <TextInput source="content" label="Course Content" stripTags/>
      <TextInput source="instructors" label="Instructors" />
      <DateInput source="webinarDate" label="Webinar Date" />
    </SimpleForm>
  </Create>
)};

export default CourseCreate;