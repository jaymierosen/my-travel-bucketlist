const config = require( './package.json' );

const { title, description, author, repository, homepage } = config;

const siteMetadata = {
  companyName: title,
  companyUrl: repository.url,
  authorName: author.name,
  authorUrl: author.url,
  siteUrl: homepage,
  siteDescription: description,
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: 'https://api-us-east-1.graphcms.com/v2/ckek2kd271ubk01xoh2a8f443/master',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.companyName,
        short_name: siteMetadata.companyName,
        start_url: '/',
        icon: 'src/assets/images/react-leaflet-icon.png',
      },
    },
  ],
};
