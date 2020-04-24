export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-thesis-studio',
                  apiId: '5b441b02-9974-4c2a-a73e-6b7e793669f0'
                },
                {
                  buildHookId: '5ea2f094715baa827dd774c1',
                  title: 'Events Website',
                  name: 'sanity-nuxt-thesis',
                  apiId: '0c6125f5-a4c2-444c-a7ba-746e2681d757'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-nuxt-thesis',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-thesis.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
