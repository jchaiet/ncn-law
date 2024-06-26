import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'uonyrg87',
    dataset: 'production'
  },
  graphql: [
    {
      playground: false,
      tag: 'graphql',
      workspace: 'default',
      id: 'ncnlaw-graphql-schema',
    },
  ]
})
