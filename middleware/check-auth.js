const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const authConfig = {
  domain: "dev-mg6fdv6o.auth0.com",
  audience: "localhost:5010"
}


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache:true,
    rateLimit:true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256']
})

module.exports = checkJwt;