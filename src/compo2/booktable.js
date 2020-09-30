import React from 'react';

const Booktable = props => (

    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Publisher</th>
                </tr>
            </thead>
            <tbody>
                {props.books.length > 0 ? (
                    props.books.map(item => (
                        <tr key={item.id}>
                            <td>{item.bookTitle}</td>
                            <td>{item.description}</td>
                            <td>{item.publisher}</td>
                            {/* <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td> */}
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={4}>No any book available</td>
                        </tr>
                    )}

            </tbody>
        </table>



    </div>
)

export default Booktable;
