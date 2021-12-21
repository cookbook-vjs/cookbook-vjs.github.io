import { page } from './lib.js';
import decorateContext, { updateUserNav } from './middlewares/render.js';
import { showCreatePage } from './views/create.js';
import { showDetailsPage } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { showHomePage } from './views/home.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';


updateUserNav()

page(decorateContext);
page('/', showHomePage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/create', showCreatePage);
page('/detais/:id', showDetailsPage);
page('/edit/:id', showEditPage);


page.start()