import React, { useState, useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
import { Card, Button } from 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import '../index.css';
import {like} from '../store/action/index'

import { useDispatch, useSelector , connect} from 'react-redux';

function CardsUp() {

    const likeme  = useSelector((state) => state.likeme);
    const dispatch = useDispatch();

    const [btn1, setBtn1] = useState('');

    const [btn1books, setBtn1Books] = useState({ items: [] });
    const [errorshow, setErrorshow] = useState(false);

   




    let URL = `https://www.googleapis.com/books/v1/volumes`;



    useEffect(() => {



        // setShow(true);


        try {
            axios.get(`${URL}?q=${btn1}`).then(result => {
                setBtn1Books(result.data);
                console.log(result.data);

            })

            // console.log(result.data);
        } catch (error) {
            setErrorshow(true);
            alert(error);

        }


    }, [btn1])



    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = (e) => {

        setBtn1(e.target.value);
        setIsOpen(true);

    };

    const hideModal = () => {
        setIsOpen(false);
    };


   

    return (

        <div className="main">




            <div className="parent1" style={{ textAlign: "center" }}>


              

                <div class="row" style={{ margin: "10px" }}>
                    <div class="col-sm-4">




                        <div class="card" style={{ border: " 5px solid olive" }}>
                        <img src="https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rhorizontal.w700.jpg" height="300px" alt="potter"/>
                            <div class="card-body">
                                <h5 class="card-title">HARRY POTTER</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="btn btn-info" value={"Harry Potter"} onClick={showModal} eroor={errorshow}>Get Books info.</button>
                                <p></p>
                                <button class="btn btn-outline-warning" style={{ borderRadius:"20px"}} onClick={()=> dispatch(like())}><i class="fa fa-thumbs-up" style={{fontsize:"48px" , color:"red"}}>{likeme}</i>
</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">

                        <div class="card" style={{ border: " 5px solid olive" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjuPGwhNDtaQCXDz1bc8GlqNQwisRpddvPCg&usqp=CAU" height="300px" alt="annefrank"/>
                            <div class="card-body">
                                <h5 class="card-title">ANNE FRANK</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="btn btn-info" value={"Anne Frank"} onClick={showModal}>Get Books info.</button>
                                <p></p>
                                <button class="btn btn-outline-warning" style={{ borderRadius:"20px"}} onClick={()=> dispatch(like())}><i class="fa fa-thumbs-up" style={{fontsize:"48px" , color:"red"}}>{likeme}</i>
</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">

                        <div class="card" style={{ border: " 5px solid olive" }}>
                        <img src="https://i.pinimg.com/originals/f9/19/3b/f9193bbd0b0006cae6107a2ce597295a.png" height="300px" alt="avangers"/>
                            <div class="card-body">
                                <h5 class="card-title">The Avengers</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button class="btn btn-info"  value={"Avengers"} onClick={showModal}>Get Books info.</button>
                                <p></p>
                                <button class="btn btn-outline-warning" style={{ borderRadius:"20px"}}onClick={()=> dispatch(like())}><i class="fa fa-thumbs-up" style={{fontsize:"48px" , color:"red"}}>{likeme}</i>
</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





            <Modal show={isOpen} onHide={hideModal} style={{ textAlign: "center" }}>


                <Modal.Header style={{ backgroundColor: "olive" }}>
                    <Modal.Title>{btn1}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#1AB394" }}>
                    {btn1books.items.map((book, index) => {
                        return (

                            <div>

                               <ul >
                                <li key={index}>
                                    <p>Book {index + 1}</p>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                                    <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                                    <p><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
                                    <hr />
                                </li>
                                </ul>
                            </div>


                        );
                    }
                    )}
                </Modal.Body>

                <Modal.Footer style={{ backgroundColor: "olive" }}>
                    <button onClick={hideModal}>Cancel</button>

                </Modal.Footer>


            </Modal>






        </div>







    );


}
export default connect(
  
    null
  
  )(CardsUp)

