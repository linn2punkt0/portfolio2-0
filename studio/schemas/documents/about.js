export default {
  name: 'about',
  type: 'document',
  title: 'About me',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'portrait',
      type: 'image',
      title: 'Portrait'
    },
    {
      name: 'professional',
      type: 'text',
      title: 'Professional',
      description: 'Describe your professional skills.'
    },
    {
      name: 'personal',
      type: 'text',
      title: 'Personal',
      description: 'Describe yourself'
    }
  ]
};
