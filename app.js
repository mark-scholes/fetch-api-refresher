const getTextBtn = document
  .getElementById("getText")
  .addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);

const getPostsBtn = document
  .getElementById("getPosts")
  .addEventListener("click", getPosts);

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
              <ul>
                  <li>ID: ${id}</li>
                  <li>Name: ${name}</li>
                  <li>Email: ${email}</li>
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
        <div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
