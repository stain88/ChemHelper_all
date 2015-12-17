var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/chemistry';
var domainUri = process.env.DOMAIN_URI || 'http://localhost:3000/';
module.exports = {
  'secret': process.env.PROJECT_FOUR_SECRET_KEY,
  'database': mongoUri,
  'domain': domainUri,
  appUrl: 'http://stain88.github.io/GA-ProjectFour/' || 'http://localhost:8000',
  oauth: {
    facebook: {
      accessTokenUrl: 'https://graph.facebook.com/v2.5/oauth/access_token',
      profileUrl: 'https://graph.facebook.com/v2.5/me?fields=id,email,name,picture'
    }
  }
}