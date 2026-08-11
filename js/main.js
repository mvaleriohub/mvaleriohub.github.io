const menu = document.querySelector('.menu-hamburguer');
const botaoAbrir = document.querySelector('.btn-menu');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

document.addEventListener('click', (evento) => {
    const cliqueForaDoMenu = !menu.contains(evento.target);
    const cliqueForaDoBotao = !botaoAbrir.contains(evento.target);

    if (cliqueForaDoMenu && cliqueForaDoBotao && menu.classList.contains('active')) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
});
