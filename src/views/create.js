import { createRecipe } from '../api/recipe.js';
import { html } from '../lib.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
        <article>
            <h2>New Recipe</h2>
            <form @submit=${onSubmit} id="createForm">
                <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
                <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
                <label class="ml">Ingredients: <textarea name="ingredients"
                        placeholder="Enter ingredients on separate lines"></textarea></label>
                <label class="ml">Preparation: <textarea name="steps"
                        placeholder="Enter preparation steps on separate lines"></textarea></label>
                <input type="submit" value="Create Recipe">
            </form>
        </article>
    </section>
`;

export async function showCreatePage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get('name');
        const img = formData.get('img');
        const ingredients = formData.get('ingredients');
        const steps = formData.get('steps');


        if(name == '' || img == '' || ingredients == '' || steps == '') {
            return alert('All fields are required!')
        }

        createRecipe({
            name,
            img,
            ingredients: [ingredients],
            steps: [steps]
        })

        ctx.page.redirect('/catalog')
    }
} 