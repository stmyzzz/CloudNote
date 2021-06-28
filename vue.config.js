module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/asset',
        'api':'@/api',
        'components':'@/components',
        'views':'@/views',
        'store':'@/store',
        'utils':'@/utils',
        'router':'@/router',
        'config':'@/config'
      }
    }
  },
  css: {
    loaderOptions: {
    sass: {
      prependData: `
        @import "@/style/mixin.scss";
        @import "@/style/common.scss";
      `
    },
    }
  }
}