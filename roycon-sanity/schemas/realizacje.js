export default {
  title: 'Realizacje',
  name: 'realizacje',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      name: "excerpt",
      description:
        "Write a short pararaph of this Page (For SEO Purposes)",
      title: "Excerpt",
      rows: 5,
      type: "text",
      validation: Rule =>
        Rule.max(160).error(
          "SEO descriptions are usually better when its below 160"
        )
    },
    {
      name: "keywords",
      description:
        "list keywords separated by a comma (For SEO Purposes)",
      title: "Keywords",
      rows: 5,
      type: "text"
      
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }
      ]
    },
    {
      title: 'Block Content',
      name: 'blockContent',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // correspond with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1 purple', value: 'h1_purple'},
            {title: 'H2 purple', value: 'h2_purple'},
            {title: 'H1 big', value: 'h1_big'},
            {title: 'H2 big', value: 'h2_big'},
            {title: 'H2 subtitle', value: 'h2_subtitle'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    }
  ]
}