import { FavoriteBorderRounded } from '@material-ui/icons';
import React from 'react'

import { useSelector } from 'react-redux';

const BookDetail = ({ book }) => {

    const reducerData = useSelector((state) => state.addme);
    const fash = {
        float: 'left 5px',
        width: 'auto',
        margin: '10px',
        textalign: 'center',
        border: 'solid 2px green',
      borderradios:"5px",
      backgroundColor: reducerData.changedColor,


    };


    

    return (
        <section>
            <div style={ fash}>
                <img style={{boxShadow:"5px 10px 10px 5px #444", margin:"20px"}}alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                <div style={{marginLeft:"20px"}}>
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