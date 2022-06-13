module.exports = {
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    async redirects() {
      return [
        {
          source: '/info',
          destination: '/info/overview',
          permanent: false,
        },
      ]
    },
  }