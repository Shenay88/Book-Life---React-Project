import { get, post } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';


export const sendLike = async (bookId) => {

    return post(baseUrl, { bookId })
}


export const getLikesByBookId = async (bookId) => {
    //because of distinct the user will not retun 2
    return get(`${baseUrl}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}
