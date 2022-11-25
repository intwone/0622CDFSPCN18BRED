console.log("Start JS");

const publications = document.querySelector(".publications");
const button = document.querySelector("#more");

button.addEventListener("click", loadPublications);


function loadPublications() {
  const card = `<div class="card" id="">
  <div class="card-header">
    <div>
      <img class="avatar" src="/img/avatar-example.png">
      <b>Ana Paula</b>
    </div>
    <img src="/img/icons/more-vertical.svg">
  </div>
  <div class="card-img">
    <img src="/img/publication_example.jpg">
  </div>
  <div class='card-body'>
    <div class="card-itens">
      <div class="likes">
        <img src="/img/icons/heart.svg" width="24px">
        <b>1 likes</b>
      </div>
      <b>Postado no dia: 00/00/0000</b>
    </div>
    <div class="card-comments">
      <p><b>Nome comentarista</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris </p>
    </div>
  </div>
  <form class="form-comments" action="/comentar" method="post">
    <input type="text" hidden name="postId" value="">
    <input type="text" placeholder="Adicione um comentário..." name="description">
    <button type="submit">Comentar</button>
  </form>
</div>`

  const likeButtons = document.querySelectorAll(".likes");
  likeButtons.forEach(el => {
    el.addEventListener("click", handleLike)
  });

  publications.insertAdjacentHTML("beforeend", card);
}


function handleLike(event) {
  if(event.target.src.includes("/img/icons/heart.svg")) {
    event.target.src = "/img/red-heart.png";
  } else {
    event.target.src = "/img/icons/heart.svg";
  }
}

/* function handleLike(event) {
  if(event.target.getAttribute("src").includes("/img/icons/heart.svg")) {
    event.target.setAttribute("src", "/img/red-heart.png")
  } else {
    event.target.setAttribute("src", "/img/icons/heart.svg")
  }
} */

const linkGoogle = document.querySelector("#google");

linkGoogle.onclick = (event) => {
  event.preventDefault()
  alert("Você clicou")
}