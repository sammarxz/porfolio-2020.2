export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'working',
      title: 'Working',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        {
          name: 'social',
          title: 'Social Media',
          type: 'social'
        }
      ]
    }
  ]
}
