import { del, get, post, put } from "../lib/request";


const baseUrl = 'http://localhost:3030/data/books';


export const getAllBooks = async (page) => {
    const query = new URLSearchParams({
        offset: (page - 1) * 4,
        pageSize: 4,
    });

    const getAllBooks = await get(`${baseUrl}?${query}`);

    return getAllBooks;
}

export const getBooksCount = async () => {

    const getBooksLength = await get(`${baseUrl}?count`);

    return getBooksLength;
}

export const createBook = async (bookData) => {

    const {
        title,
        img,
        year,
        type,
        description
    } = bookData;

    if (title == '' || img == '' || year == '' || type == '' || description == '') {
        throw new Error('All fields are required')
    };

    const urlPattern = /https?:\/\/./i

    if (urlPattern.test(img) === false) {
        throw new Error('Invalid URL');
    }

    if (title.length < 4) {
        throw new Error('Book name must be at least 4 characters long');
    }

    if (year < 1700) {
        throw new Error('Year is out of range');
    }

    const book = { title, img, year, type, description }

    const createBookResponse = await post(baseUrl, book) // _id

    return createBookResponse;
}

export const getBookById = async (bookId) => {

    const book = await get(`${baseUrl}/${bookId}`);
    return book;
}

export const updateBook = async (bookId, bookData) => {

    const {
        title,
        img,
        year,
        type,
        description
    } = bookData;

    if (title == '' || img == '' || year == '' || type == '' || description == '') {
        throw new Error('All fields are required')
    };

    const urlPattern = /https?:\/\/./i

    if (urlPattern.test(img) === false) {
        throw new Error('Invalid URL');
    }

    if (title.length < 4) {
        throw new Error('Book name must be at least 4 characters long');
    }

    if (year < 1700) {
        throw new Error('Year is out of range');
    }

    const updatedBook = { title, img, year, type, description }


    const updatedBookResponse = await put(`${baseUrl}/${bookId}`, updatedBook) // _id

    return updatedBookResponse;
}

export const deleteBook = async (bookId) => {

    return del(`${baseUrl}/${bookId}`);
}

export const getLatestBooks = async () => {


    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });
    const latestBooks = await get(`${baseUrl}?sortBy=_createdOn desc${query}`);

    return latestBooks;
};
