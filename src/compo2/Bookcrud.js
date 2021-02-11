 
import React, { useState } from 'react';
import '../index.css';
import Booktable from './booktable'
import Addbook from './Addbook'
import { Height } from '@material-ui/icons';
import BootstrapTable from 'react-bootstrap-table-next';
import { Grid, Paper } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:" 5px 5px 5px 5px #444",
    width:"50%",
    margin:"10px"
  },
}));

const Bookcrud= () => {
const bData = [
{ id: 1, bookTitle: 'Harry Potter', description: 'Expecto patronum..!!', publisher: 'harry' },
{ id: 2, bookTitle: 'Anne frank', description: 'A story of young girl', publisher: 'anne123'},
{ id: 3,  bookTitle: 'Avengers', description: 'BEST == The Marvel Universe ', publisher: 'mr Stark' },
]

const classes = useStyles();
const [books, setBooks] = useState(bData)

const reducerData = useSelector((state) => state.addme);



const addBook = book => {

    book.id = book.length + 1
    
    setBooks([...books, book])
    
    }

    // const deleteBook = id => {
    //     setBooks(books.filter(book => book.id !== id))
    //     }

//     const [change, SetChange] = useState('"#1AB394');
//   const clickme= () =>{
//       let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//       // SetChange("#1AB394");
   
//       SetChange(color);

//   }



 
return (

    <>

<Grid container spacing={3}>
     {/* <h2 className="text-center" style={{ paddingTop:"15px" }}
      >Add Your Fav Books info Here..!!</h2>
<Grid item xs={12} md={6} lg={6}>
{/* <h3 className="text-center">Add Books</h3> */}
{/* <Addbook addBook={addBook} />
</Grid>
<Grid item xs={12} md={6} lg={6}> */}
{/* <h3 className="text-center">Book List</h3> */}
{/* <Booktable books={books}  />
</Grid>  */}

<Grid item xs={12}>
          <span>
          <h2 style={{ paddingTop:"15px" , textAlign:"center", color:reducerData.textColor}}
      >Add Your Fav Books info Here..!!</h2>
          </span>
        </Grid>

        
 
<Grid item xs={12} style={{  display:"flex", padding:"30px"}}>
          <Paper xs={6} 
          className={classes.paper}>
        <h3 className="text-center" style={{color:reducerData.textColor}}>Add Books</h3>
 <Addbook addBook={addBook} />
          </Paper>
        {/* </Grid> */}
        {/* <Grid item xs={6} style={{paddingRight:"30px", border:" 2px solid green"}}> */}
          <Paper item xs={6} 
          className={classes.paper}>
        <h3 className="text-center" style={{color:reducerData.textColor}}>Book List</h3>
        <Booktable books={books} />
          </Paper>
        </Grid>
       

        </Grid>
     




{/* <div className="container" >
<h2 className="text-center" style={{ paddingTop:"15px" }}>Add Your Fav Books info Here..!!</h2>

<div>

<div className="row" style={{ paddingTop:"40px"}}> */}



{/* <div className="col-md-6 col-md-offset-2" style={{border:"5px solid olive"}}>

<h3 className="text-center">Add Books</h3>



<Addbook addBook={addBook} />



</div> */}

{/* 
<div className="col-md-6 col-md-offset-2" style={{border:"5px solid olive"}}>

<h3 className="text-center">Book List</h3>


<Booktable books={books}  /> */}
{/* //deleteBook={deleteBook} */}
{/* </div>
</div>
</div>

</div>

<div> */}


{/* 
<BootstrapTable bootstrap4 keyField="id" data={ products } caption={<CaptionElement />} columns={ columns }
striped = {true} />
</div> */}

</>
);
}
 
export default Bookcrud;