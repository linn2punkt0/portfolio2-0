import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdFace from 'react-icons/lib/md/face';
import MdWork from 'react-icons/lib/md/work';
import MdPublic from 'react-icons/lib/md/public';

const hiddenDocTypes = listItem =>
  !['project', 'siteSettings', 'about', 'cv'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Home')
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
        )
        .icon(MdPublic),
      S.listItem()
        .title('About')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        )
        .icon(MdFace),
      S.listItem()
        .title('CV')
        .child(
          S.editor()
            .id('cv')
            .schemaType('cv')
            .documentId('cv')
        )
        .icon(MdWork),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects'))
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
