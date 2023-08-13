'use strict'

const searchButton = document.getElementById("searchButton");
const postIdInput = document.getElementById("postId");
const postContainer = document.getElementById("postContainer");
const postElement = document.getElementById("post");
const commentsButton = document.getElementById("commentsButton");
const commentsElement = document.getElementById("comments");

searchButton.addEventListener("click", () => {
    const postId = postIdInput.value;
    if (postId >= 1 && postId <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
                postContainer.style.display = "block";
            })
            .catch(error => {
                console.error("Error fetching post:", error);
            })
            .finally(() => {
                console.log('post request handled')
            });
    } else {
        console.error("Invalid post ID.");
    }
});

commentsButton.addEventListener("click", () => {
    const postId = parseInt(postIdInput.value);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            commentsElement.innerHTML = "<h3>Comments</h3>";
            comments.forEach(comment => {
                commentsElement.innerHTML += `
                <div>
                    <h4>${comment.name}</h4>
                    <p>${comment.body}</p>
                </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
        })
        .finally(() => {
            console.log('comments request handled')
        });
});
  