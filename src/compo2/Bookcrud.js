 
import React, { useState } from 'react';
import '../index.css';
import Booktable from './booktable'
import Addbook from './Addbook'
 
const Bookcrud= () => {
const bData = [
{ id: 1, bookTitle: 'Harry Potter', description: 'Expecto patronum..!!', publisher: 'harry' },
{ id: 2, bookTitle: 'Anne frank', description: 'A story of young girl', publisher: 'anne123'},
{ id: 3,  bookTitle: 'Avengers', description: 'BEST == The Marvel Universe ', publisher: 'mr Stark' },
]





const [books, setBooks] = useState(bData)



const addBook = book => {

    book.id = book.length + 1
    
    setBooks([...books, book])
    
    }

    const deleteBook = id => {
        setBooks(books.filter(book => book.id !== id))
        }

    
 
return (
<div className="container">
<h2 className="text-center" style={{ paddingTop:"15px" }}>Add Your Fav Books info Here..!!</h2>

<div>

<div className="row" style={{ paddingTop:"40px"}}>



<div className="col-md-6 col-md-offset-2" style={{border:"5px solid olive"}}>

<h3 className="text-center">Add Books</h3>



<Addbook addBook={addBook} />



</div>


<div className="col-md-6 col-md-offset-2" style={{border:"5px solid olive"}}>

<h3 className="text-center">Book List</h3>


<Booktable books={books} deleteBook={deleteBook} />
</div>
</div>
</div>

</div>
);
}
 
export default Bookcrud;