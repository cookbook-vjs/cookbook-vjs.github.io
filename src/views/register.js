import { register } from '../api/user.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <article>
        <h2>Register</h2>
        <form @submit=${onSubmit} id="registerForm">
            <label>Username: <input type="text" name="username"></label>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="rePass"></label>
            <input type="submit" value="Register">
        </form>
    </article>
</section>
`;

export async function showRegisterPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (username == '' || email == '' || password == '' || rePass == '') {
            return alert('All fields are required!')
        }

        if (password !== rePass) {
            return alert('Passwords don\'t match!')
        }

        await register(username, email, password)
        ctx.updateUserNav()
        ctx.page.redirect('/');
    }
}