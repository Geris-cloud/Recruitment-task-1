const withImages = require('next-images')
module.exports = withImages({
  reactStrictMode: true,
  env: {
    'MYSQL_HOST': 'eu-cdbr-west-01.cleardb.com',
    'MYSQL_DATABASE': 'heroku_5490835374fe91b',
    'MYSQL_USER': 'b127572602ace8',
    'MYSQL_PASSWORD': 'd9e86e86',
    'dateStrings': 'true',
  },
  async headers() {
    return [
      {
        source: "/api/delegation",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
})