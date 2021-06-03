import { FormControlLabel, FormGroup, Grid, Typography, Checkbox, Card } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  main: {
      backgroundColor:"#fff",
      paddingLeft:"20px",
      paddingTop:"20px",
  },
    root: {
      //  flexGrow: 1,
    // flex:'0.35',
      
      
      
      display:'flex',
      flexDirection: 'column',
    
      
    },
    typo: {
        fontWeight:"bold",
        marginBottom:"10px"
    },
    typo1: {
        fontWeight:"bold",
        marginBottom:"10px",
        marginTop:"20px"
    },
    price: {
        marginTop:"20px"
    },
   
  }));
  

const SideBar = () => {
    const classes = useStyles();
    return (
        <>
        {/* <Card> */}
           <Grid container xs={6}  className={classes.main}  container
               direction="column"
               justify="flex-start"
               alignItems="flex-start">
            
               <Typography variant=''className={classes.typo} >Tags</Typography>
               {/* <Grid
               container
               direction="column"
               justify="flex-start"
               alignItems="flex-start"
               > */}
                   <FormGroup>
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Custom task"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Marketing & Sales"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Integration"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Optimization"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Deployment"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Testing"
      />
                   </FormGroup>

               {/* </Grid> */}
               
                {/* <Grid contained className={classes.price}> */}
                
               <Typography className={classes.typo1} >Task Price Range</Typography>
               <Grid
               
               container
               direction="column"
               justify="flex-start"
               alignItems="flex-start"
               >
                   <FormGroup>
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Less Than 100"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="N100 - N300"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="N301 - N900"
      />
                   <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Above N900"
      />
                  
                   </FormGroup>

               </Grid>
               </Grid>
           {/* </Grid> */}
           {/* </Card> */}
        </>
    )
}

export default SideBar
