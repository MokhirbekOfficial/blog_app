const { fetch, fetchAll } = require('../../lib/postgress')

const GetAdmin = `
SELECT
    *
FROM 
    blog_admin
WHERE
    admin_name = $1 and admin_password = $2
`

const AddCategory = `
INSERT INTO categories
    (category_name,category_owner)
VALUES 
    ($1,$2)
`
const AddPost = `
INSERT INTO posts
    (post_title,post_content,post_img,post_owner,post_category)
VALUES 
    ($1,$2,$3,$4,$5)
`

const getAdmin = (admin_name, admin_password) => fetch(GetAdmin,admin_name,admin_password)
const addCategory = (category_name,category_owner) => fetch (AddCategory,category_name,category_owner)
const addPost = (post_title,post_content,post_img,post_owner,post_category) => fetch(AddPost,post_title,post_content,post_img,post_owner,post_category)
module.exports = {
    getAdmin,
    addCategory,
    addPost
}