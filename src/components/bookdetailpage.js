import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BookDetail from "../components/bookDetail";
import Loader from "../components/loader";


const BookDetailPage = ({ match }) => {
  const {
    params: { bookId }
  } = match;
  const [book, setBook] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadstyle= {
  
        color: "green",
        textalign: "center",
        padding: "20px 0"
     
  }

  useEffect(() => {
    const URL = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBook = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    
    fetchBook();
  }, [bookId]);

  return (
    <>
      {/* <Link to={`/`}>Go back to search books</Link> */}
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to={`/`}>Go back to search books</Link></li>
    
    <li class="breadcrumb-item active" aria-current="page"><Link to={`/form`}>Add Book</Link></li>
  </ol>
</nav>
      <Loader loading={loading}>
     
        loading book detail for book ID <strong>{bookId}</strong>
      </Loader>
      {error && (
        <p>Some error occurred, while fetching books API</p>
      )}
      {book && <BookDetail book={book} />}
    </>
  );
};

export default BookDetailPage;