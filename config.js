var config = {
  production: {
    session: {
      key: 'the.express.session.id',
      secret: 'something.super.secret'
    },
    database: 'mongodb://<user>:<pwd>@apollo.modulusmongo.net:27017/db',
    twitter: {
      consumerKey: 'consumer Key',
      consumerSecret: 'consumer Secret',
      callbackURL: 'http://yoururl.com/auth/twitter/callback'
    },
    common :commonVariables()
  },
  default: {
    session: {
      key: 'the.express.session.id',
      secret: 'something.super.secret'
    },
    database: 'mongodb://127.0.0.1:27017/db',
    twitter: {
      consumerKey: 'consumer Key',
      consumerSecret: 'consumer Secret',
      callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
    },
    common :commonVariables()
  }
}
function commonVariables() {
  return {
    port: 3000,
    ServerName:"Node Server"
  }
}
exports.get = function get(env) {
  return config[env] || config.default;
}
