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
      name: 'start',
      type: 'date',
      title: 'Start'
    },
    {
      name: 'end',
      type: 'date',
      title: 'End'
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
