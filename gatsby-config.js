/**
 * CONTENTFUL
 * 
 * {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `your_space_id`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
 */
const siteMetadata = {
  title: "Napoli Rockers Syndicate",
  titleTemplate: "%s · We are what we do",
  description:
    "Napoli Rockers is a musical collective born in 2010 from a group of young Neapolitan musicians, united in order to share their deep love for Reggae music together with its true message: bring voice to those who have never had it, and claim unity, peace and justice.",
  siteUrl: "http://localhost:8000", // No trailing slash allowed!
  image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  twitterUsername: "@PaoroCatarano",
  siteLanguage: `en`,
  siteLocale: `en`,
  authorName: `Paolo Catalano`,
  favicon: `./static/favicon.png`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Cutive Mono",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Napoli Rockers Syndicate`,
        short_name: `NRS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: siteMetadata.favicon,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
