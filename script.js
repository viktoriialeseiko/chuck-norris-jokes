const btn = document.querySelector(".jokeBtn")
const p = document.querySelector("p")
const submitBtn = document.querySelector('#submit')
const inputName = document.querySelector('#input-name')
const inputLastName = document.querySelector('#input-lastname')
const image = document.querySelector('img');

let firstName = 'Chuck';
let lastName = 'Noris';

inputName.addEventListener('change', e => {
    firstName = e.target.value;
    firstName = firstName ? firstName :'Chuck';
})  
inputLastName.addEventListener('change', e => {
    lastName = e.target.value;
    lastName = lastName ? lastName :'Noris'
})  
btn.addEventListener("click", () => {
  fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}& lastName=${lastName}`)
    .then(response => response.json())
    .then(data => p.innerText = data.value.joke)

    image.classList.add("apply-shake");
});
function change(){
    document.querySelector('#image').classList.add("shake");
}
image.addEventListener("animationend", () => {
    image.classList.remove("apply-shake");
});


// button.addEventListener('click', async () => {
//     const firstName = firstNameInput.value || 'Chuck';
//     const lastName = lastNameInput.value || 'Norris';
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//     const data = await response.json();
//     p.innerHTML = data.value.joke;
//     // .then(response => response.json())
//     // .then(data => {
//     //     p.innerHTML = data.value.joke;
//     // })
// })