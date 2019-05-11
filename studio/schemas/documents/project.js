import { format } from 'date-fns';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'date',
      title: 'Date',
      description: 'When was the project completed?',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YY'
      }
    },
    {
      name: 'featured',
      title: 'Featured',
      description: 'Feature this project on homepage?',
      type: 'boolean'
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'text'
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'url'
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image'
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image'
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', slug, media }) {
      return {
        title,
        media
      };
    }
  }
};
