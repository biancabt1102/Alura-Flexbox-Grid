const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', ()=>{
    /* toggle é que podemos ativar e desativar sem precisarmos nos preocupar em remover e depois ativar novamente, ele já faz isso automaticamente com o próprio toggle */
    menu.classList.toggle('menu-lateral--ativo')
})