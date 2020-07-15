const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache:true,
    rateLimit:true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-mg6fdv6o.auth0.com/.well-known/jwks.json'
  }),
  audience: 'localhost:5010',
  issuer: 'https://dev-mg6fdv6o.auth0.com/',
  algorithms: ['RS256']
})

module.exports = checkJwt