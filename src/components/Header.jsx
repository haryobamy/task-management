import { Button, Grid, Icon, Typography,InputAdornment, InputLabel,OutlinedInput , FormControl,FilledInput, Modal } from '@material-ui/core'
import React ,{useState,useEffect} from 'react'
import logo from '../assests/GetriPay.png'
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {createTask} from '../redux/actions/tasks';




const useStyles = makeStyles((theme) => ({
    root: {
    
    },
    image: {
    display:'flex',
    marginTop:'30px'

    },
    typo: {
        fontWeight:'bold',
        marginTop:'8px',
        fontSize:'18px',
        marginLeft:'3px'
    },
    button: {
        borderRadius: '0 45px 45px 45px',
        backgroundColor:'#92abe6',
        padding: '3px 25px 3px 25px',
        color: "#0037ba",
        marginTop:'-30px',
        textTransform: 'capitalize'
    },
    search: {
        backgroundColor:'#fff',
    },
    filled: {
        padding : '0px 0 10px 0'
    },
    sort: {
    //    backgroundColor: '#fff' ,
       padding: '10px 25px 10px 15px',
       borderLeft:'2px solid gray',
       borderRadius: '0px',
    //    margin:'-20px 0 -20px 0',
       fontSize:'12px',
       display:'flex',
       textTransform: 'capitalize',
       
    },




    btn: {
        width:'200px', 
        padding:'10px', 
        color:'lightgray', 
        fontWeight:'bold', 
        borderRadius:'5px', 
        margin:'0px 120px 0 120px', 
        borderColor:'grey', 
        border:'none',  
        borderRadius:'5px', 
        backgroundColor:'darkgray',
        
      },
      
    
       label :{
          fontWeight:'bold',
          fontSize: '18px',
          fontFamily:'Arial',
          marginBottom: '5px',
    
    
        },
      
        input :{
            width:'100%',
            borderRadius:'5px',
            // marginBottom:'15px',
            // marginTop:'25px,',
            fontSize:'18px',
            // border:'1px solid gray'
            padding:'8px',
            marginBottom:'10px',
            fontFamily:'Cascadia Mono',
      
          
        },
    
        inter: {
            borderRight: 'none',
            width:'20%',
            borderRadius:'5px 0 0 5px',
            fontWeight:'bold',
            fontSize:'18px',
            border:'1px solid gray',
            padding:'8px',
            marginLeft: '-5px',
            width:'60px',
            color:'gray',
            marginTop:'-10px',
            
            
            
    
        },
        phone: {
            borderLeft: 'none',
            borderRadius:'0 5px 5px 0',
            // paddingLeft:'15px',
            fontSize:'18px',
            border:'1px solid gray',
            width:'360px',
            padding:'8px ',
            marginTop:'-10px',
    
        },
    
        paper: {
            position: 'absolute',
            width: 500,
            height:650,
            backgroundColor: '#fff',
            border: '2px solid #000',
            boxShadow:'5px',
            padding: theme.spacing(2, 4, 3),
          float:'left',
          left:'50%',
          top:'50%',
          transform: 'translate(-50%, -50%)',
          
          },
        
   
  }));
  

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [taskData, setTaskData] = useState({
        tag: '',
        userHandle:'',
        description: '',
        delivery: '',
        price: '',
        status:'',
    })

    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleChange = (e) => {
          const {name, value} = e.target
          setTaskData({
              ...taskData,
              [name]:value 
          })
 console.log(value)
      }

      const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(createTask(taskData))
          handleClose();
      }


   

    return (
        <>
        <Grid container className={classes.root}
    direction="row"
    justify="space-between"
    alignItems="baseline">
    
            <Grid justify="flex-start" className={classes.image}>
                <img src={logo} alt="GetriPay" width='40px' height='40px'/>
                <Typography variant='h5'className={classes.typo} >GetriTracker</Typography>
            </Grid>
            
            <Grid justify="flex-end">
                <Button  color="primary" className={classes.button} onClick={handleOpen} >Add a new task <Icon fontSize='small' color='primary'>add</Icon></Button>
            </Grid>
        </Grid>
        <Grid>
        <FormControl fullWidth className={classes.search} variant="filled">
         
          <FilledInput
          className={classes.filled}
            id="filled-adornment-amount"
            startAdornment={<InputAdornment style={{ paddingLeft:'10px'}} position="start">  <Icon fontSize='small' style={{color:'lightgray', size:'20px',}}>search</Icon> </InputAdornment>}
            placeholder='search keyword'
            endAdornment= {<Button className={classes.sort} >Sortby<Icon>sort </Icon></Button>}
          />
        </FormControl>

        <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div  className={classes.paper}>
                    <i className='fa fa-times close' onClick={handleClose}></i>
                    <Typography id="simple-modal-title" variant='h5' > Add New Task</Typography>
                    <hr/>
                    <div >
                    <form > 
                        <InputLabel className={classes.label} >Username</InputLabel>
                    <input type='text' className={classes.input}  required placeholder='e.g John Doe' name='userHandle' value={taskData.userHandle} onChange={handleChange}  />
                        <InputLabel className={classes.label}>Delivery</InputLabel>
                        <input type='text' className={classes.input}  required placeholder='Number of Days Task will be delivered' name='delivery' value={taskData.delivery} onChange={handleChange} />
                        <InputLabel className={classes.label}>Types</InputLabel>
                    <select className={classes.input} name='tag' value={taskData.tag} onChange={handleChange}>
                        <option>select prefered service</option>
                        <option value='Custom task'>Custom task</option>
                        <option value='Marketing & Sales'> Marketing & Sales</option>
                        <option value='Integration'>Integration</option>
                        <option value='Optimization'>Optimization</option>
                        <option value='Deployment'>Deployment</option>
                        <option value='Testing'>Testing</option>
                    </select>
                    <InputLabel className={classes.label}>Status</InputLabel>
                    <select className={classes.input} name='status' value={taskData.status} onChange={handleChange}>
                        <option>Select Task Status</option>
                        <option value='Verify'>Verify</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='In Review'>In Review</option>
                        <option value='Waiting approval'>Waiting approval</option>
                    </select>
                        <InputLabel className={classes.label}>Amount</InputLabel>
                        <input type='text' className={classes.input} placeholder='Enter amount' name='price' value={taskData.price} onChange={handleChange} />
                        <InputLabel className={classes.label}>Description</InputLabel>
                    <textarea cols='6' rows='4' className={classes.input} type='text' required placeholder='e.g Increase confidence.... ' name='description' value={taskData.description} onChange={handleChange} />
                      

                    <Button className={classes.btn} onClick={handleSubmit} >Add Task</Button>
                   
                    </form>
                    </div>

                    </div>
                    </Modal>
        </Grid>

           
        </>
    )
}

export default Header
