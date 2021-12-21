import { html } from '../lib.js';

const editTemplate = (onSubmit) => html`
    <section id="edit">
        <article>
            <h2>Edit Recipe</h2>
            <form @submit=${onSubmit} id="editForm">
                <input type="hidden" name="_id" value="3987279d-0ad4-4afb-8ca9-5b256ae3b298">
                <label>Name: <input type="text" name="name" placeholder="Recipe name"></label>
                <label>Image: <input type="text" name="img" placeholder="Image URL"></label>
                <label class="ml">Ingredients: <textarea name="ingredients"
                        placeholder="Enter ingredients on separate lines"></textarea></label>
                <label class="ml">Preparation: <textarea name="steps"
                        placeholder="Enter preparation steps on separate lines"></textarea></label>
                <input type="submit" value="Save Changes">
            </form>
        </article>
    </section>
`;

export async function showEditPage(ctx) {
    ctx.render(editTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        
    }
}