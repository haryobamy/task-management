import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Button, Toolbar,Tabs, Tab,Link} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
toolbar: {
    backgroundColor:'lightgray',
    
},
link : {
    borderButtom: '3px solid #265acc'

}
   
  }));

const NavBar = () => {
    const classes = useStyles();

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    //};
    return (
        <>
        
        
            <Toolbar  className={classes.toolbar}>
                <div>
           
              <Link > <Button color='inherit' href='/' className={classes.link} > Active Task</Button></Link> 
               <Link> <Button color='inherit' href='/completed' >Completed</Button></Link>
               <Link> <Button href='/archived' >Archived</Button></Link>
               <Link>  <Button href='/closed' >Closed</Button></Link>
               </div>
               <div>
               <Button>Next</Button>
               <Button>Prev</Button>
               </div>
            </Toolbar>
        

        </>
    )
}

export default NavBar
