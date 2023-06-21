// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')


const data = require('./src/data/data.json')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Roycon',
  siteUrl: 'https://www.roycon.pl',
  plugins: [
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-37063241-1'
    //   }
    // },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'bqlg1o8q',
        dataset: 'production',
        token: 'skkEs9ovK6WFoIVQnZgEdwiA94myo4gRRSDbqPyxf4VEQjIyLpv3hisdi7fVeSEwNmxi6v0SI9LzAOJauLt9VCxXsMdCD7bnoQskj7E8YJF0ahbZiH1LBIGznkQPbx5dvQ6zmNLT5Nqm81DOLGDofmPZ40y1CXrEFlFWpgzNk68msjUUdQQ6',
        overlayDrafts: false,
        // Only enable real-time changes in development
        watchMode: process.env.NODE_ENV === "development",
        // API Version has to be set to today's date for the latest features.
        // See: https://sanity.io/help/js-client-api-version
        apiVersion: '2021-10-14',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          
        }
      }
    },
    {
      use: "gridsome-plugin-htaccess",
      options: {
        redirections: [
          {
            from: "http://auto.roycon.pl/",
            to: "https://roycon.pl/",
          },
          {
            from: "/aktualna-oferta/",
            to: "https://roycon.pl/",
          },
          {
            from: "/pl/oferta/",
            to: "https://roycon.pl/",
          },
          {
            from: "/realizacje-2/",
            to: "https://roycon.pl/",
          },
          {
            from: "/ofirmie/",
            to: "https://roycon.pl/",
          },
        ],
      },
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
              id: 'GTM-TQFQVQ9',
          },
      },
  },
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}