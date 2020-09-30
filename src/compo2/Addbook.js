import React, { useState } from 'react'

const Addbook = props => {

    const initialFormState =
    {
        id: null,
        bookTitle: '',
        description: '',
        publisher: ''
    }

    const [book, setBook] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setBook({ ...book, [name]: value })
    }

    const hSubmit = event => {
        event.preventDefault()
        if (!book.bookTitle || !book.description || !book.publisher) return

        props.addBook(book);
        setBook(initialFormState);
    }

    return (
        <form onSubmit={hSubmit}>
            <input class="form-control" type="text" name="bookTitle" placeholder="Enter Title" value={book.bookTitle} onChange={handleInputChange} required /><br /><br />
            <input class="form-control" type="text" name="description" placeholder="Enter Description" value={book.description} onChange={handleInputChange} required /><br /><br />
            <input class="form-control" type="text" name="publisher" placeholder="Enter Publisher" value={book.name} onChange={handleInputChange} required /><br /><br />
            <button class="form-control" className="btn btn-primary">Add Book</button>
        </form>
    )
}

export default Addbook;