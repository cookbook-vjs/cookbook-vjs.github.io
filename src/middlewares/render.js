import { logout } from '../api/api.js';
import { getUserData } from '../api/util.js';
import { page, render } from '../lib.js';


let root = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

function boundRender(content) {
    render(content, root)
}

export default function decorateContext(ctx, next) {
    ctx.render = boundRender;
    ctx.updateUserNav = updateUserNav;
    next()
}

export function updateUserNav() {
    const userData = getUserData()
    if (userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}

async function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/')
}