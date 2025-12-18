const botao = document.querySelector(".menu")
const menu = document.querySelector("#menu-list")
botao.addEventListener("click" ,()=>{
    botao.classList.toggle("ativar");
    menu.classList.toggle("ativar");
})