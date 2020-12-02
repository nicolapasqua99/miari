module.exports = {
  siteMetadata: {
    title: `Testing`,
    description: `Miari magazine, un magazine di fotografia`,
    author: `@aloxtk`,
    siteURL: 'https://testgatsby-9d688.web.app/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variable: false,
            weights: ['400, 600, ']
          },
          {
            family: 'Nunito Sans',
            variable: false,
            weights: ['400']
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: "AIzaSyD-ANZQIjPLUaTQvUyzhHMgl_mS9z3iq3U",
          authDomain: "testgatsby-9d688.firebaseapp.com",
          databaseURL: "https://testgatsby-9d688.firebaseio.com",
          projectId: "testgatsby-9d688",
          storageBucket: "testgatsby-9d688.appspot.com",
          messagingSenderId: "1076648461704",
          appId: "1:1076648461704:web:6a5bef30bab487fe18e63d",
          measurementId: "G-39KYD2HJBP"
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-key.json"),
        types: [
          {
            type: 'Photos',
            collection: 'photos',
            map: doc => ({
              id: doc.id,
              imgSrc: doc.imgUrl,
            }),
          },
          {
            type: 'Articles',
            collection: 'articles',
            map: doc => ({
              title: doc.title,
              link: doc.link,
              text: doc.text,
              name: doc.name,
              photolist: doc.photolist,
              photos___NODE: doc.photos.map(photos => photos.id),
            }),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dev.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
