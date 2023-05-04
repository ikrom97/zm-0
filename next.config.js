const { i18n } = require('./next-i18next.config')

module.exports = {
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
      fileName: false,
    }
  },
  i18n,
  reactStrictMode: true,
};
