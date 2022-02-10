const { fetch, fetchAll } = require('../../lib/postgress')

const AddAdmin = `
INSERT INTO blog_admin
    (admin_name,admin_password)
VALUES 
    ($1,$2)
`

const AllAdmin = `
SELECT
    *
FROM 
    blog_admin
WHERE
    is_super = false
`
const DeleteAdmin = `
DELETE
FROM
    blog_admin
WHERE
    admin_id = $1
`

const addAdmin = (admin_name, admin_password)=> fetch(AddAdmin,admin_name,admin_password)
const allAdmin = () => fetchAll(AllAdmin)
const deleteAdmin = (admin_id) => fetch(DeleteAdmin,admin_id)
module.exports = {
    addAdmin,
    allAdmin,
    deleteAdmin
}