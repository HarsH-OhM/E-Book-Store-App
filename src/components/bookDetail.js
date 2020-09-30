import { FavoriteBorderRounded } from '@material-ui/icons';
import React from 'react'

const BookDetail = ({ book }) => {

    const fash = {
        float: 'left 5px',
        width: 'auto',
        margin: '10px',
        textalign: 'center',
        border: 'solid 2px green',
      borderradios:"5px"


    };


    

    return (
        <section>
            <div style={ fash}>
                <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                <div class>
                    <h3><strong>Title:</strong> { book.volumeInfo.title }</h3>
                    {/* <p><strong>Authors:</strong> { bookAuthors(book.volumeInfo.authors) }</p> */}
                    <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                    <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                    <p><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
                    <p>{book.volumeInfo.description}</p>

                </div>
                </div>
        </section>
    )
};

export default BookDetail;