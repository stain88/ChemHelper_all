var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/chemistry';
var domainUri = process.env.DOMAIN_URI || 'http://localhost:3000/';
module.exports = {
  'secret': process.env.PROJECT_FOUR_SECRET_KEY,
  'database': mongoUri,
  'domain': domainUri
}