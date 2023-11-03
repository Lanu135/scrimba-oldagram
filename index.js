const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

//Loops through the array to append all posts to the DOM
for (let i = 0; i < posts.length; i++) {
    appendPostToDom(i)
    
}

function appendPostToDom(index) {
    const newSection = document.body.appendChild(document.createElement("section"))
    newSection.innerHTML = `
        <div class="container">
            <img class="avatar" src="${posts[index].avatar}" alt="Avatar of ${posts[index].name}">
            <div>
                <p class="bold without-margin-bottom">${posts[index].name}</p>
                <p class="without-margin-top">${posts[index].location}</p>
            </div>
        </div>
        <img class="post" src="${posts[index].post}" alt="Painting of ${posts[index].name}">
        <div class="container-icons">
            <img id="icon-heart-${index}" class="icon" src="images/icon-heart.png" alt="heart icon">
            <img id="icon-comment" class="icon" src="images/icon-comment.png" alt="speech bubble item">
            <img id="icon-dm" class="icon" src="images/icon-dm.png" alt="paper airplane icon">
            <p class="bold">${posts[index].likes} likes</p>
            <p class="without-margin-top"><span class="bold">${posts[index].username}</span> ${posts[index].comment}</p>
        </div>
    `   
}