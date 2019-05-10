export default {
  name: 'work',
  type: 'document',
  title: 'Work',
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
      name: 'employer',
      type: 'text',
      title: 'Employer',
      description: 'Your employer/company..'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your assignments.'
    }
  ]
};
