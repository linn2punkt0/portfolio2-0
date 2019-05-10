export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd596e80f75d253dd8108f6',
                  title: 'Sanity Studio',
                  name: 'portfolio2-0-studio',
                  apiId: '0e7daa48-e81c-4f6a-beb7-4f086ec62f8f'
                },
                {
                  buildHookId: '5cd596e80d84abbbd2ee7883',
                  title: 'Portfolio Website',
                  name: 'portfolio2-0',
                  apiId: '608a5e04-2e89-4408-98f2-7533fadc7a54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/linn2punkt0/portfolio2-0',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio2-0.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
