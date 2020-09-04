import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import social from './socialLink'
import siteInfo from './siteInfo'
import author from './author'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([social, siteInfo, author, project])
})
