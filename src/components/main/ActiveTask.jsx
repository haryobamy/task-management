import { Avatar, Badge, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography, Menu, MenuItem, Fade, ListItemAvatar,ListItemText, Divider, List, ListItem,  LinearProgress, InputLabel, Modal} from '@material-ui/core'
import React, {useEffect,useState} from 'react';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { makeStyles } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useDispatch, useSelector} from 'react-redux';
import {getTasks, updateTask, createTask, deleteTask} from '../../redux/actions/tasks';




const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        display:'flex',
        marginBottom:'20px',
        maxWidth: '100%',
        
        
      
    },
    typo: {
        fontSize:"10px",
    textTransform:"uppercase",
    color:'gray'
    },
    button : {
        borderRadius:'0 45px 45px 45px',
        backgroundColor:'inherit',
        border: '1px solid gray',
        padding: '0px 50px 0px 20px',
        
        
    },
    content: {
    
        
        
        
    },
    starticon: {
        margin:'25px 20px ',
    },
    media: {
        display:'flex',
        // marginLeft:'20px',
        
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
    



const ActiveTask = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [currentId, setCurrentId] = useState(null )
     const open = Boolean(anchorEl);
     const dispatch = useDispatch();
     const classes = useStyles();
     const tasks = useSelector((state) => state.tasks );
    const taskToUpdate = useSelector((state) => currentId ? state.tasks.find((t) => t._id == currentId) : null );
     

     //setPlanAmount(cables.find(v => v.variation_code === value)?.variation_amount )

     const [taskData, setTaskData] = useState({
      tag: '',
      userHandle:'',
      description: '',
      delivery: '',
      price: '',
      status:'',
  });

  console.log(taskToUpdate)

  useEffect(() => {
    if(taskToUpdate)
    setTaskData(taskToUpdate)
   
  }, [taskToUpdate])


  const clear = ()=> {
    setCurrentId(null);
     setTaskData({
      tag: '',
      userHandle:'',
      description: '',
      delivery: '',
      price: '',
      status:'',
  });

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updateTask(currentId,  taskData))
      }else{
        dispatch(createTask(taskData))
      }
      handleModalClose();
      clear();  
    }

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleChange = (e) => {
      const {name, value} = e.target
      setTaskData({
          ...taskData,
          [name]:value 
      })
console.log(value);

  }

     console.log(tasks)

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const renderMessage = () =>{
          return(
              <div>
                  <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
              </div>

          );
      }

    return (
        <>
        <Typography className={classes.typo}>Current <InfoIcon style={{fontSize:"10px" , color:"gray", marginBottom:'-1px'}}/></Typography>
       
       { !tasks.length?(  <LinearProgress />) :
        ( <div>
            {tasks.map((task) => ( <Grid key={task.taskId}  item xs={12} >
                
               
             <Card className={classes.root} >
                <div className={classes.starticon}>
                          <Badge color='secondary' variant='dot' anchorOrigin={{ vertical:'bottom', horizontal: 'right', }} >
                              <LibraryBooksIcon />
                              </Badge> 
                               </div>    
                        
                        <CardContent >
                        <Typography variant="body2" component='h1' style={{fontWeight:'bold'}} >{task.description}</Typography>
                        {/* <h4 >Increase confidence with trustpilot Reviews</h4> */}
                        <Button disabled size='small' style={{backgroundColor:"lightgray",fontSize:"10px",borderRadius:'45px',textTransform:'capitalize',padding:'2px 8px 2px 8px', fontWeight:'700'}} >{task.tag}</Button>

                   </CardContent>
                   <CardContent className={classes.content}>
                       
                       <Typography style={{fontWeight:'bold'}}>N{task.price} </Typography>
                       <Typography variant='body1' style={{fontSize:'12px',color:'gray'}}  >Task price </Typography>
                       <Typography variant='body2' component='h1'  style={{fontWeight:'bold', fontSize:'10px'}}>Delivery: within {task.delivery} days  </Typography>
                       {/* <h3>Delivery: <span>within 3 days</span></h3>
                        */}
                   </CardContent>
                   <CardContent >
                   <CardMedia>
                       <div className={classes.media}>
                           <div>
                               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                           </div>
                   
                   <div style={{marginLeft:'15px'}}>
                   <Typography variant='body2' style={{fontWeight:'bold',}}>{task.userHandle}</Typography>
                   <Typography style={{fontSize:'12px', color:'gray' ,fontWeight:'500'}}>Assigned to</Typography>
                   </div>
                      </div>

                   </CardMedia>
                     </CardContent>
                     <CardContent>
                         <div style={{display:'flex'}}>
                         <Button className={classes.button}><Badge color='' variant='dot'/>  <span style={{marginLeft:'25px',marginRight:'25px'}}>{task.status}</span> </Button>
                         <IconButton color="" aria-label="notification" >
                         <Badge color='secondary' variant='dot' anchorOrigin={{ vertical:'top', horizontal: 'right', }} >
                         <MessageIcon />
                         </Badge>
                         </IconButton>
                         <IconButton>
                             <MoreHorizIcon  onClick={handleClick}/>
                             <Menu 
                             id="fade-menu"
                             anchorEl={anchorEl}
                             keepMounted
                             open={open}
                             onClose={handleClose}
                             TransitionComponent={Fade}>
                             <MenuItem onClick={handleClose}> <div onClick={handleModalOpen}><EditIcon fontSize='small' onClick={() => setCurrentId(task._id)} /> <span>Edit</span></div></MenuItem>
                             <MenuItem onClick={handleClose}><DeleteIcon fontSize='small' onClick={() => dispatch(deleteTask(task._id))}/> <span>Delete</span> </MenuItem>
                              <MenuItem onClick={handleClose}> <HelpOutlineIcon fontSize='small'/> <span>More info</span> </MenuItem>

                                </Menu>
                         </IconButton>
                         </div>
                     </CardContent>
            </Card>
            <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    <div  className={classes.paper}>
                    <i className='fa fa-times close' onClick={handleModalClose}></i>
                    <Typography id="simple-modal-title" variant='h5' > Update Task</Typography>
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
                      

                    <Button className={classes.btn} onClick={handleSubmit} >Update Task</Button>
                   
                    </form>
                    </div>

                    </div>
                    </Modal>
            </Grid>
            ))}
            </div>
            
           
       ) }
        
        </>
    )
}

export default ActiveTask
