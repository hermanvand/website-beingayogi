module.exports = {
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