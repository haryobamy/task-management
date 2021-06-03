import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Button, Toolbar,Tabs, Tab,Link} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';




const useStyles = makeStyles((theme) => ({
toolbar: {
    backgroundColor:'lightgray',
    
},
link : {
    borderButtom: '3px solid #265acc'

},

   
  }));

const NavBar = ({handlePageClick, pageCount}) => {
    const classes = useStyles();

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    //};
    return (
        <>
        <NavWrapper>
        
            <Toolbar  className={classes.toolbar}>
                <div>
           
              <Link > <Button color='inherit' href='/' className={classes.link} > Active Task</Button></Link> 
               <Link> <Button color='inherit' href='/completed' >Completed</Button></Link>
               <Link> <Button href='/archived' >Archived</Button></Link>
               <Link>  <Button href='/closed' >Closed</Button></Link>
               </div>
               <div>
               <ReactPaginate
                
                 previousLabel={'Next'}
                 nextLabel={'Prev'}
                 breakLabel={"..."}
                 breakClassName={"break-me"}
                 pageCount={pageCount}
               
                 onPageChange={handlePageClick}
                 containerClassName={"pagination"}
                 subContainerClassName={"pages pagination"}
                 activeClassName={"active"}/>
               </div>
            </Toolbar>

        
        </NavWrapper>
        </>
    )
}

const NavWrapper = styled.div`
    
.pagination {
  margin-top: 10px;
//    margin-left: 10px
  display: flex;
  list-style: none;
  
  
  outline: none;
  justify-content:
}
.pagination > .active > a{
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}
.pagination > li > a{
  // border: 1px solid #007bff;
  border: none;
  border-radius: 0.25rem;
  margin: 0 0.22rem;
  padding: 5px 10px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
  background-color: #007bff;
  border-color: #007bff;
  outline: none ;
}
.pagination > li > a, .pagination > li > span{
  color: #007bff
}
.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
  border-radius: unset
}
`

export default NavBar
