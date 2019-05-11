export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'tagline',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Tagline'
    },
    {
      name: 'contact',
      type: 'text',
      title: 'Contact',
      description: 'E.g. Want to get in touch?'
    },
    {
      name: 'wayOfContact',
      type: 'text',
      title: 'Way of contact',
      description: 'E.g. Send me an email.'
    },
    {
      name: 'email',
      type: 'text',
      title: 'Email',
      description: 'Your email adress'
    },
    {
      name: 'github',
      type: 'url',
      title: 'GitHub',
      description: 'Link to your GitHub profile'
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'Linked in',
      description: 'Link t your LinkedIn profile'
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      description: 'Link to your Facebook profile'
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      description: 'Link to your Instagram profile'
    }
  ]
};
