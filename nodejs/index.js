const posts = [
    {title : "Post 1"},
    {title: "Post 2"},
    {title: "Post 3"}
]

const listPost = () => {
    posts.map((post) => {
        console.log(post)
    })
}

const addPost = (post, callback) => {
    posts.push(post)
    callback()
}

addPost({title : "Post 4"}, listPost)