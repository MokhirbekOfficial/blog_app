const { fetch, fetchAll } = require('../../lib/postgress')

const TokenChecker = `
SELECT 
    *
FROM
    blog_admin
WHERE 
    admin_id = $1
`
const tokenchecker = (admin_id) => fetch(TokenChecker, admin_id)

module.exports = {
    tokenchecker
}