// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const staticData = require('./src/data/data.json')


module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: 'Pages'
    })

    for (const item of staticData) {
      contentType.addNode({
        index: item.pages.index,
        realizacje: item.pages.realizacje,
        partnerzy: item.pages.partnerzy,
        kontakt: item.pages.kontakt,
        oferta: item.pages.oferta,
        technologia: item.pages.technologia,
        ofirmie: item.pages.ofirmie
      })
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSanityArticle {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }`)

    data.allSanityArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug.current}`,
        component: './src/templates/Article.vue',
        context: {
          id: node.id,
        }
      })
    })
  })
}

