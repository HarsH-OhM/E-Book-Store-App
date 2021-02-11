import React, { useState } from 'react'
import {connect } from 'react-redux'
import { add } from '../store/action/index'; 
import {useDispatch} from 'react-redux'
const Addbook = props => {

    const initialFormState =
    {
        id: null,
        bookTitle: '',
        description: '',
        publisher: ''
    }

    const [book, setBook] = useState(initialFormState)
    const dispatch = useDispatch(); 
     


    const handleInputChange = event => {
        const { name, value } = event.target

        setBook({ ...book, [name]: value })
    }

    const hSubmit = event => {
        event.preventDefault()
        if (!book.bookTitle || !book.description || !book.publisher) return

        props.addBook(book);
        dispatch(add(book));
        setBook(initialFormState);
    }

    return (
        <div className="addBook" style={{padding:"10px"}}>
        <form onSubmit={hSubmit}>
            <input class="form-control" type="text" name="bookTitle" placeholder="Enter Title" value={book.bookTitle} onChange={handleInputChange} required /><br /><br />
            <input class="form-control" type="text" name="description" placeholder="Enter Description" value={book.description} onChange={handleInputChange} required /><br /><br />
            <input class="form-control" type="text" name="publisher" placeholder="Enter Publisher" value={book.name} onChange={handleInputChange} required /><br /><br />
            <button class="form-control" className="btn btn-primary">Add Book</button> <br/><br/>
        </form>
        </div>
    
    )
}

export default connect()(Addbook);
