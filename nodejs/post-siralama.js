//1
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

//2
const posts = [
    { title: "Post 1" },
    { title: "Post 2" },
    { title: "Post 3" }
]

const listPost = () => {
    posts.map((post) => {
        console.log(post)
    })
}

const addPost = (newPost) => {

    return new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve("Post is added")
        reject("Wrong!")
    })

}

async function genPostControl (post) {
    try {
        await addPost(post)
        listPost()
    } catch (error) {
        console.log(error)
    }
}

genPostControl({title : "Post 4"})
