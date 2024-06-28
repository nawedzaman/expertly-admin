
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
const CourseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Course Title"/>
      <RichTextInput source="description" label="Course Description" stripTags/>
      <ImageInput source="pictures" label="Related pictures" accept="image/*" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="duration" label="Course Duration (in hours)" />
      <NumberInput source="price" label="Course Price" />
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
      <RichTextInput source="features" label="Course Features" stripTags/>
      <RichTextInput source="what_you_will_learn" label="What You Will Learn" stripTags/>
      <RichTextInput source="content" label="Course Content" stripTags/>
      <TextInput source="instructors" label="Instructors" />
      <DateInput source="webinarDate" label="Webinar Date" />
    </SimpleForm>
  </Create>
);

export default CourseCreate;