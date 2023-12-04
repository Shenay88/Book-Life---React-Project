import { get, post } from "../lib/request";


const baseUrl = 'http://localhost:3030/data/books';


export const getAllBooks = async () => {

    const getAllBooks = await get(baseUrl);
    return getAllBooks;
}

export const createBook = async (bookData) => {

    const createBookResponse = await post(baseUrl, bookData) // _id

    return createBookResponse;
}

export const getBookById = async (bookId) => {

    const book = await get(`${baseUrl}/${bookId}`);
    return book;
}
