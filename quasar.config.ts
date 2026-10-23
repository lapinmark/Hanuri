import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => ({
  boot: [],
  css: ['app.scss'],
  extras: ['material-icons'],
  build: {
    publicPath: '/Hanuri/',
    target: {
      browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
      node: 'node20'
    },
    vueRouterMode: 'history'
  },
  devServer: {
    port: 80,
    open: false,
    allowedHosts: ['hanuri'],
  },
  
  framework: {
    config: {},
    plugins: []
  },
  animations: [],
  sourceFiles: {
    router: 'src/router/index',
    store: 'src/stores/index'
  }
}))
