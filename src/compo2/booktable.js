import React from 'react';
import {useDispatch, connect,useSelector} from 'react-redux'

import {set, del} from '../store/action/index'

const Booktable = props => {

    // const set = useSelector((state) => state.set)
    const dispatch = useDispatch();

  

    return(
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
                            {/* <td><p>{set}</p></td> */}
                            <td>
              {/* <button className="button muted-button">Edit</button> */}
              {/* <button className="button muted-button"  onClick={() => props.deleteBook(item.id)}>Delete</button> */}
              {/* onClick={()=> dispatch(del(item.id))}  //trying with redux */}
            </td>
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
                }

                // const mapStateTiProps = (state) =>{
                //     return {

                //         books:state,

                //     }
                // }

export default connect()(Booktable);
