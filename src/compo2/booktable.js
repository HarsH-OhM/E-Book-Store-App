import React, {useState}from 'react';
import {useDispatch, connect,useSelector} from 'react-redux'
import axios from 'axios';

import {set, del} from '../store/action/index'

const Booktable = props => {

    // const set = useSelector((state) => state.set)
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

      //api calling
      // let URL = `https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch`;

      // const token =  'tTU3gFVUdP';

      

      // axios.post(URL, {
      //   email:'krishnugurjar@gmail.com'
      // }, {
      //   headers: {
      //     'Authorization': `Bearer ${token}` 
      //   }
      // }).then((res) => {
      //   console.log(res.data)
      //   setData(res.data);
      // })
      // .catch((error) => {
      //   console.error(error)
      // })



    //    return(
    // <div className="table-responsive">
    //     <table className="table">
    //         <thead>
    //             <tr>
    //                 <th>ID</th>
    //                 <th>Awbno NO.</th>
    //                 <th>Carrier</th>
    //                 <th>Status</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {data.length > 0 ? (
    //                 data.map(item => (
    //                     <tr key={item}>
    //                         <td>{item._id}</td>
    //                         <td>{item.awbno}</td>
    //                         <td>{item.carrier}</td>
    //                         <td>{item.current_status}</td>
    //                         {/* <td><p>{set}</p></td> */}
    //                         <td>
    //           {/* <button className="button muted-button">Edit</button> */}
    //           {/* <button className="button muted-button"  onClick={() => props.deleteBook(item.id)}>Delete</button> */}
    //           {/* onClick={()=> dispatch(del(item.id))}  //trying with redux */}
    //         </td>
    //                     </tr>
    //                 ))
    //             ) : (
    //                     <tr>
    //                         <td colSpan={4}>No any book available</td>
    //                     </tr>
    //                 )}

    //         </tbody>
    //     </table>



    // </div>
    // )

  

    return(
    <div className="table-responsive" style={{padding:"10px"}}>
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



//krishna project page

// import React, {useState}from 'react';
// import axios from 'axios';



// const App = props => {

//     const [data, setData] = useState([]);
    

//       //api calling
//       let URL = `https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch`;

//       const token =  'tTU3gFVUdP';

      

//       axios.post(URL, {
//         email:'krishnugurjar@gmail.com'
//       }, {
//         headers: {
//           'Authorization': `Bearer ${token}` 
//         }
//       }).then((res) => {
//         console.log(res.data)
//         setData(res.data);
//       })
//       .catch((error) => {
//         console.error(error)
//       })



//        return(
//     <div className="table-responsive">
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Awbno NO.</th>
//                     <th>Carrier</th>
//                     <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.length > 0 ? (
//                     data.map(item => (
//                         <tr key={item}>
//                             <td>{item._id}</td>
//                             <td>{item.awbno}</td>
//                             <td>{item.carrier}</td>
//                             <td>{item.current_status}</td>
                            
//                             <td>
            
//             </td>
//                         </tr>
//                     ))
//                 ) : (
//                         <tr>
//                             <td colSpan={4}>No any book available</td>
//                         </tr>
//                     )}

//             </tbody>
//         </table>



//     </div>
//     )

  

    
//                 }

              

// export default App;
