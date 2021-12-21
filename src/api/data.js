import { getUserData } from "./util.js";

export const endpoints = {
    recipes: '/classes/Recipe',
    recipeById: '/classes/Recipe/',
    comments: '/classes/Comment',
    recipeDetails: (id) => `/classes/Recipe/${id}?include=owner`,
    commentsByRecipe: (recipeId) => `/classes/Comment?where=${createPointerQuerry('recipe', 'Recipe', recipeId)}include=owner`  
}

export function createPointerQuerry(propName ,className, objectId) {
    return createQuerry({[propName]: createPointer(className, objectId)});
}

export function createQuerry(querry) {
    return encodeURIComponent(JSON.stringify(querry))
}

export function createPointer(className, objectId) {
    return {
        __type: 'Pointer',
        className,
        objectId
    }
}

export function addOwner(record) {
    const info = getUserData()
    const id = info.id;
    record.owner = createPointer('_User', id)
    return record;
}