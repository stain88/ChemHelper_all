var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/chemistry';
var domainUri = process.env.DOMAIN_URI || 'http://localhost:3000/';
module.exports = {
  'secret': process.env.PROJECT_FOUR_SECRET_KEY,
  'database': mongoUri,
  'domain': domainUri,
  appUrl: 'http://stain88.github.io',
  oauth: {
    facebook: {
      accessTokenUrl: 'https://graph.facebook.com/v2.5/oauth/access_token',
      profileUrl: 'https://graph.facebook.com/v2.5/me?fields=id,email,name,picture'
    },
    github: {
      accessTokenUrl: 'https://github.com/login/oauth/access_token',
      profileUrl: 'https://api.github.com/user'
    }
  }
}