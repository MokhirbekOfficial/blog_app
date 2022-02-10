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
const GetCategories = `
SELECT
    *
FROM 
    categories
WHERE
    category_owner = $1
`
const GetPosts = `
SELECT
    *
FROM 
    posts
WHERE
    post_owner = $1
`

const UpdateCategory = `
UPDATE 
    categories
SET 
    category_name = $3
WHERE 
    category_id = $1 and category_owner = $2
RETURNING 
    *
`
const UpdatePosts = `
UPDATE 
    posts
SET 
    post_title = $3,
    post_content = $4,
    post_img = $5,
    post_category = $6
WHERE 
    post_id = $1 and post_owner = $2
RETURNING 
    *
`
const DeleteCategory = `
DELETE
FROM
    categories
WHERE
    category_id = $1 and category_owner = $2 
`
const DeletePost = `
DELETE
FROM
    posts
WHERE
    post_id = $1 and post_owner = $2 
`

const getAdmin = (admin_name, admin_password) => fetch(GetAdmin,admin_name,admin_password)
const addCategory = (category_name,category_owner) => fetch (AddCategory,category_name,category_owner)
const addPost = (post_title,post_content,post_img,post_owner,post_category) => fetch(AddPost,post_title,post_content,post_img,post_owner,post_category)
const getCategories = (category_owner) => fetchAll(GetCategories,category_owner)
const getPosts = (post_owner) => fetchAll(GetPosts,post_owner)
const deleteCategory = (category_id,category_owner) => fetch(DeleteCategory,category_id,category_owner)
const deletePost = (post_id,post_owner) => fetch(DeletePost,post_id,post_owner)
const updateCategory = (category_id, category_owner,category_name) => fetch(UpdateCategory,category_id, category_owner,category_name)
const updatePost = (post_id, post_owner,post_title,post_content,post_img,post_category) => fetch(UpdatePosts,post_id, post_owner,post_title,post_content,post_img,post_category)

module.exports = {
    getAdmin,
    addCategory,
    addPost,
    getCategories,
    getPosts,
    deleteCategory,
    deletePost,
    updateCategory,
    updatePost
}