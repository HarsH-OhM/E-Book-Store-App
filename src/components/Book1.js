import React, {  useState } from 'react';

import axios from 'axios'
import '../index.css';
function Book1() {



    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data)
    }

    const [books, setBooks] = useState([]);
    return (

        <div class="row">
            <div class="col-md-12">
                <div className="App2">
                    <h1>Game of Thrones Books</h1>
                    



                    <div>
                      
        <div>
                            <button className="fetch-button" onClick={fetchData}>
                                Get Books
        </button>
                        </div>
                    </div>


                    <div className="books">
                        {books &&
                            books.map((book, index) => {
                                const cleanedDate = new Date(book.released).toDateString();
                                const authors = book.authors.join(', ');

                                return (
                                <div className="book" key={index}>
                                    <h3>Book {index + 1}</h3>
                                    <h2>{book.name}</h2>

                                    <div className="details">
                                        <p>👨: {authors}</p>
                                        <p>📖: {book.numberOfPages} pages</p>
                                        <p>🏘️: {book.country}</p>
                                        <p>⏰: {cleanedDate}</p>
                                    </div>
                                </div>
                                );

                            })}

);
      </div>
                </div>
            </div>
        </div>

    )}

    export default Book1;