import React, { useEffect, useState } from 'react';
import 'react-bootstrap'
import axios from 'axios'
import '../index.css';
import { Link, useHistory } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import CardText from '@material-ui/core/Card'
import SearchBar from 'material-ui-search-bar';
import {Loader} from './loader';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

import {

    Card, CardActions, CardHeader, CardMedia
} from '@material-ui/core';


const Mid = () => {


    const cardStyle = {
        float: 'left 5px',
        // width: '370px',
        position: 'relative',
        borderradius: '5px',
        padding: ' 20px',
        margin: '10px',
        width: '100%',

        flexbasis: 'width',

        // boxShadow: "5px 5px 5px 5px #888888"


    };


    const history = useHistory();

    const [searchip, setSearchip] = useState('');
    const [mybooks, setMyBooks] = useState({ items: [] });
    const [loading, setLoading] = useState(false);
    const [errorshow, setErrorshow] = useState(false);

    const [loadingStart, setLoadingStart] = useState(false);

    const reducerData = useSelector((state) => state.addme);


    const onInputChange = (e) => {
        setSearchip(e.target.value);
    }



    const onSubmitHandler = (e) => {

        e.preventDefault();

        fetchBooks();
    }


    //api calling
    let URL = `https://www.googleapis.com/books/v1/volumes`;


    const fetchBooks = async () => {
        setLoading(true);
       
        setErrorshow(false);

        try {
            const result = await axios.get(`${URL}?q=${searchip}`);
            setMyBooks(result.data);
            setLoading(false);
            console.log(result.data);
        } catch (error) {
            setErrorshow(true);
            setLoading(false);
            console.log(error);
            // alert("000ps.. error occured..!!");
            // window.location.href = '/';
            // history.push('/');

            
           

        }
        
        
    }




    return (

       
        <div className="mid">
             {loading &&  <Loader/>}
            <div class="row" style={{ textAlign: "center" }}>

                <div class="col-md-12" >


                    <marquee style={{ textAlign: "center" }} behavior="scroll" direction="RIGHT"><h1>WELCOME TO BOOK STORE</h1></marquee>

                    <section>
                        <form onSubmit={onSubmitHandler} style={{ margin: "auto", padding: "10px" }}>
                            <label>
                                <span>Search for books:</span></label>
                            <div class="input-group m-3" style={{ width: "auto", textalign: "center" }}>
                                <input type="search"
                                    placeholder="Type here to get your fav book..."
                                    value={searchip}
                                    onChange={onInputChange}
                                    error={errorshow}
                                    style={{ margin: "auto", border: "2px solid olive" }} class="form-control" />

                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit" style={{ border: "2px solid olive", marginLeft: "3px" }}>
                                        <i class="fa fa-search"></i>
                                    </button>

                                </div>
                            </div>





                        </form>

                        <div className="books">

                            {/* <Loader loading={loading}>
                            <div className="load" style={{border:"10px solid green", position:"relative" , backgroundColor:"white", marginLeft:"10px" }}>
                                <p>fetching Books for {searchip}</p>
                                </div>
                            </Loader> */}

                            {/* {errorshow && (
        <p>Some error occurred, while fetching books API</p>
      )} */}

                           

                            { !errorshow &&  mybooks.items && (mybooks.items.length>0) ?
                                mybooks.items.map((book, index) => {
                                    return (

                                        <div className="book" style={{backgroundColor: reducerData.changedColor}}>
                                            <ul>
                                                <li key={index}>
                                                    <p>Book {index + 1}</p>


                                                    <Card style={cardStyle} >
                                                        <CardHeader
                                                            title={book.volumeInfo.title}

                                                        />
                                                        <CardMedia

                                                        >
                                                            <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                                                        </CardMedia>

                                                        <CardText>
                                                            <p><a href={book.selfLink}>{book.selfLink}</a></p>

                                                            <h3>{book.volumeInfo.title}</h3>
                                                            {/* <p>{ bookAuthors(book.volumeInfo.authors) }</p> */}
                                                            <p>{book.volumeInfo.publishedDate}</p>
                                                            <Link to={`/book/${book.id}`}>Show More details</Link>
                                                        </CardText>

                                                    </Card>
                                                </li>
                                            </ul>

                                        </div>

                                    )

                                     })  : ( errorshow && 
                                        <div className="errorm" style={{border:"10px solid red", position:"relative" , backgroundColor:"white", marginLeft:"10px" }}>
                                        <p style={{ textAlign: "center" , color:"red" }}>Some error occurred, while fetching the Books.</p>
                                        </div>
                                     ) 
                                    
                                    
                            }

                            

                            </div>




                    </section>





                </div>

            </div>







        </div>



    );

};

export default Mid;
