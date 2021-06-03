import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import SiderBar from './SideBar'
import Archived from './Archived'
import Closed from './Closed';
import ActiveTask from './ActiveTask';
import CompletedTask from './completedTask';
import NavBar from "./NavBar";
import {Grid} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root : {
    // flexGrow: 1,
   display:'grid',
   placeItems:'center',
   height:"100vh",
  //  backgroundColor:'#ededed'
    
  },
  body:{
    display:'flex',
    height: '90vh',
    width: '90vw',
   
    

  },
  home: {
    marginLeft: '-220px',
    marginTop: '-20px',
    // padding:'0 0 20px -10px'
    // flex:'0.65'
    
  },
  nav:{
    marginLeft:'-10px',
    fontWeight:'bold',
  }
    
}));

const Home =() => {
  const [historys, setHistorys] = useState('');
  const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState('');
    const tasks = useSelector((state) => state.tasks );
    

  const classes = useStyles();



  const handlePagination = (e) => {
  
    
      const data = tasks
   
              const slice = data.slice(offset, offset + perPage)

               setHistorys(slice)
      
    setPageCount(Math.ceil(data.length / perPage))
      console.table(slice)
      console.table(data)
    
  

}

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offset);
    
    handlePagination();

};
 




  return (
    <>
      <div
      className={classes.root}
      >
        <div className={classes.body}>
        <Grid item xs={12} sm={6}>
      <SiderBar />
      </Grid>
      
      
      {/* <Grid fullwidth  > */}
      <Grid className={classes.home} item xs={12} sm={12}>
         
    <NavBar className={classes.nav}  handlePageClick={handlePageClick} pageCount={pageCount} />
      <BrowserRouter>
      
    <Switch>
      <Switch>

      <Route exact path="/">
            <ActiveTask  />
          </Route>
          <Route exact path="/completed">
            <CompletedTask  />
          </Route>
          <Route exact path="/archived">
            <Archived  />
          </Route>
          <Route exact path="/closed">
            <Closed  />
          </Route>

        </Switch>
        </Switch>
        </BrowserRouter>
      </Grid>   
      </div>
      </div>
    </>
  );
}

export default Home;