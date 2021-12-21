import { login } from '../api/user.js';
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <article>
        <h2>Login</h2>
        <form @submit=${onSubmit} id="loginForm">
          <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <input type="submit" value="Login">
        </form>
    </article>
</section>
`;

export async function showLoginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
      
    async function onSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const username = formData.get('username')
        const password = formData.get('password')
        
        if(username == '' || password == '') {
            return alert('All fields are required!')
        }

        await login(username, password)
        ctx.updateUserNav()
        ctx.page.redirect('/catalog')
    }
}