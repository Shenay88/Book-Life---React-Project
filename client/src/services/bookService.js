const baseUrl = 'http://localhost:3030/jsonstore/books';


export const getAllBooks = async () => {
    const getBooks = await fetch(baseUrl);
    const getAllBooks = await getBooks.json();
    
    return Object.values(getAllBooks);
}

export const getBookById = async(bookId) => {

    const getBook = await fetch(`${baseUrl}/${bookId}`);
    const book = await getBook.json();

    return book;
}

export const createBook = async (bookData) => {
    const bookReq = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
    });

    const createBookResponse = await bookReq.json(); // _id

    return createBookResponse;

}