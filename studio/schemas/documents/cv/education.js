export default {
  name: 'education',
  type: 'document',
  title: 'Education',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'time',
      type: 'date',
      title: 'Time'
    },
    {
      name: 'school',
      type: 'text',
      title: 'School',
      description: 'The name of the school'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your education.'
    }
  ]
};
