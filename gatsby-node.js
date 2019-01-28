/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // "art" sites
  const sitesPageTemplate = path.resolve('src/templates/SitesPage.tsx')
  const {
    blues,
    diyPostmodern,
    freelance,
    thisIsNotASadBoy,
  } = require(path.resolve('./src/data/sites'))

  const sitesPages = [
    {
      emoji: '🔷',
      pagePath: '/blue',
      sites: blues,
      title: 'blue',
    },
    {
      emoji: '⌇',
      pagePath: '/diypostmodern',
      sites: diyPostmodern,
      title: 'DIY Postmodern',
    },
    {
      emoji: '😔',
      pagePath: '/thisisnotasadboy',
      sites: thisIsNotASadBoy,
      title: 'This Is Not A Sad Boy',
    },
  ]

  sitesPages.forEach(({ emoji, pagePath, sites, title }) => {
    createPage({
      path: pagePath, // required
      component: sitesPageTemplate,
      context: { emoji, sites, title }, // resolves to pageContext in component
    })
  })

  // web apps
  const projectsPageTemplate = path.resolve('src/templates/WebAppsPage.tsx')
  const webApps = require(path.resolve('./src/data/webapps'))

  createPage({
    path: '/webapps',
    component: projectsPageTemplate,
    context: {
      emoji: `🍽`,
      projects: webApps,
      title: 'Web Apps',
    },
  })
}
