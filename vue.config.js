const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes : ['/'],
    // server : {
    //   port : 8080
    // },
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      // headless : false,
      renderAfterElementExists: '#app'
    }),
  }),
];

module.exports = {
  lintOnSave : false,
  configureWebpack : (config) => {
    if(process.env.NODE_ENV === 'production'){
      config.plugins.push(...productionPlugins);
    }
  },
  filenameHashing : false
};