import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `NCN Law`,
    siteUrl: `https://www.ncnlaw.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      token: process.env.SANITY_TOKEN,
      projectId: "uonyrg87",
      dataset: "production",
      graphqlTag: "graphql",
      watchMode: true,
      overlayDrafts: true
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: "src/images/gatsby-icon.png"
    }
  }, 
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  }]
};

export default config;
