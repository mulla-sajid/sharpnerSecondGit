let posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 0);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete");
      }
    }, 1000);
  });
}

// Simulate the user creating a post

createPost({ title: "Post 1" })
  .then(() => updateLastUserActivityTime())
  .then(() => createPost({ title: "Post 2" }))
  .then(() => updateLastUserActivityTime())
  .then(() => createPost({ title: "Post 3" }))
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("All Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
    return deletePost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
