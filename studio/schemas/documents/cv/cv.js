export default {
  name: 'cv',
  type: 'document',
  title: 'cv',
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
    },
    {
      name: 'adress',
      type: 'text',
      title: 'Adress',
      description: 'Your adress'
    },
    {
      name: 'phone',
      type: 'text',
      title: 'Phone',
      description: 'Your phone number'
    },
    {
      name: 'email',
      type: 'text',
      title: 'Email',
      description: 'Your email'
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      description: 'Your skills',
      of: [{ type: 'skills' }]
    },
    {
      name: 'work',
      type: 'array',
      title: 'Work',
      description: 'Your work experience',
      of: [{ type: 'work' }]
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      description: 'Your educations',
      of: [{ type: 'education' }]
    }
  ]
};
