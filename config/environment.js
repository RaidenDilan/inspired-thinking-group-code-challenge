const port   = process.env.PORT || 4000;
const env    = process.env.NODE_ENV || 'development';
const dbURI  = process.env.MONGODB_URI || `mongodb://localhost/inspired-thinking-group-${env}`;
const secret = process.env.SECRET || 'I bet you\'re wondering what it is!😜';

module.exports = { port, env, dbURI, secret };
