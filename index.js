const url = "https://jsonplaceholder.typicode.com/comments";
const commenterName = document.getElementById("name");

fetch(url)
     .then((res) => res.json())
     .then((data) => displayComments(data));

function displayComments(comments) {
     const commentWrapper = document.getElementById("commentWrappers");
     comments.map((comment) => {
          const comments = document.createElement("div");
          comments.setAttribute("class", "comments");

          comments.innerHTML = `
              <div class="comments">
              <div class="comment-body">
                   <i
                        class="fa-solid fa-comment-dollar comment-image"
                   ></i>
                   <div
                        class="name-comment"
                        id="nameComment"
                   >
                        <h3 class="name" id="name">
                             ${comment.name}
                        </h3>
                        <small class="email"
                             >${comment.email}</small
                        >
                        <p class="comment">
                             ${comment.body}
                        </p>
                   </div>
              </div>
         </div>
          `;

          commentWrapper.appendChild(comments);
     });
}
