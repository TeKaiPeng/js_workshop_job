document.addEventListener('DOMContentLoader', function (){
  const burger = document.getElementById('#navbar-burger');
  const menu = document.getElementById('#navbar-menu');
  const form = document.form['#search-job']

  burger.addEventListener('click', function (){
    burger.classList.toggle('.is-acive')
    menu.classList.toggle('.is-acive')
  }) 

  form.addEventListener('submit', function (e){
    e.preventDefault();
    if (form.Element[2].checked)
    fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=✓&description=${form.elements[0]}&location=${form.elements[1]}&full_time=on`)
    .then(response => response.json())
    .then(posts => console.log(posts))
    else 
    fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=✓&description=${form.elements[0]}&location=${form.elements[1]},  `)
    .then(response => response.json())
    .then(posts => console.log(posts))
  })
})









// .then(response => response.json())
// .then(posts => {
//   const post = posts[0];
//   document.querySelector('.post-created-at').textContent = post.created_at;
