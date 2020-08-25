document.addEventListener('DOMContentLoader', function (){
  const burger = document.getElementById('#navbar-burger');
  const menu = document.getElementById('#navbar-menu');

  burger.addEventListener('click', function (){
    burger.classList.toggle('.is-acive')
    menu.classList.toggle('.is-acive')

  ])  


  
})









// fetch('https://still-spire-37210.herokuapp.com/positions.json?markdown=true')
// .then(response => response.json())
// .then(posts => {
//   const post = posts[0];
//   document.querySelector('.post-created-at').textContent = post.created_at;
