const getTextBtn = document
  .getElementById("getText")
  .addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);

const getPostsBtn = document
  .getElementById("getPosts")
  .addEventListener("click", getPosts);

const addPosts = document
  .getElementById("addPost")
  .addEventListener("click", addPost);

function getText() {
  console.log("beep");
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      let text = `<p>${data}</p>`;
      document.getElementById("output").innerHTML = text;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Users</h2>`;
      data.forEach((element) => {
        const { id, name, email } = element;
        output += `
              <ul class="list-group mb-3">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Name: ${name}</li>
                  <li class="list-group-item">Email: ${email}</li>
              </ul>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Posts</h2>`;
      data.forEach((post) => {
        const { userId, id, title, body } = post;
        output += `
        <div class="card card-body mb-3">
          <h2 class="mb-4>${title}</h2>
          <p>${body}</p>
        </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
