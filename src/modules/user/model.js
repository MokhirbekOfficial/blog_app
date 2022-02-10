const { fetch, fetchAll } = require('../../lib/postgress')

const AddUser = `
INSERT INTO users
    (user_name,user_tel,user_category)
VALUES 
    ($1,$2,$3)
`
const GetPosts = `
SELECT
	*
FROM
	posts
`
const GetPostsCategory = `
SELECT
    *
FROM 
    posts
WHERE
    post_category = $1
`
const addUser = (user_name,user_tel,user_category) => fetch(AddUser,user_name,user_tel,user_category)
const getPosts = () => fetchAll(GetPosts)
const getPostsCategory = (post_category) => fetchAll(GetPostsCategory,post_category)


module.exports = {
    addUser,
    getPosts,
    getPostsCategory
}