import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

const AppointmentItem = (props) => {
    
  const {title, time,} = props.AppointmentItems;
  console.log( 'id', props.AppointmentItems.id);
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (data) => {
    setOpen(false);
    
  };
  const { register, handleSubmit, errors } = useForm();
  const [shipInfo, setShipInfo] = useState(null);
  const onSubmit = data => {
    
    setShipInfo(data)
    const  orderDetails = {       
      Service: props.AppointmentItems,
      contact: data,
     
  };
  console.log( "final order", orderDetails);
    fetch('https://guarded-sierra-66334.herokuapp.com/placeOrder', {
      method: 'POST',
      body: JSON.stringify(orderDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(order => {
       console.log('order Placed')
      
        
      });

     }

    //addToDatabaseCart(orderDetails,1)
    
   
  return (
      
            <Grid textAlign="center"  item xs={4} >
               
                
                <Box bgcolor="info.main" ml={10} mr={10} p={5} textAlign="center" >
                    
                    <h2  >{title}</h2>
                    <h4 >{time}</h4>
                    <p>10 Spaces Available</p>
                {/* <Link to='/PopUp'>
                    <button className='main-button'>Review Order</button>
                </Link> */}
                
                {/* <Link href="/detailsApp">
                     <Button onClick={ ()=> props.handleAddAppointmentItems(props.AppointmentItems)}
                      variant="contained" color="primary">
                          
                        Book Appointment    
                    </Button>
                    </Link> */}
                
                    <Button  onClick={handleClickOpen} >
                          <Button onClick={ ()=> props.handleAddAppointmentItems(props.AppointmentItems)}
                                 variant="contained" color="primary">
                          
                                Book Appointment    
                            </Button>
                    
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    
                    <DialogContent>
                        <DialogContentText>
                        <h1>  {props.AppointmentItems.title} </h1>
                        </DialogContentText>
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

          

                        <DialogContentText>          
            <input name="Name" ref={register({ required: true })} placeholder="Name" />
            {
                errors.AddressLine1 && <span className="error">Name is required</span>
            }
            </DialogContentText>
            <DialogContentText>
            <input name="PhoneNumber" ref={register({ required: true })} placeholder="PhoneNumber" />
            {
                errors.city && <span className="error">Phone Number is required</span>
            }</DialogContentText>
            <DialogContentText>
            <input name="Email" ref={register({ required: true })} placeholder="Email" />
            {
                errors.country && <span className="error">Email is required</span>
            }</DialogContentText>
            <Button  variant="contained">
            <input type="submit" />
            </Button>
        </form>
        <br/>
                        {
                            props.AppointmentItems.id && <div>
                                <h3>Your Appointment is</h3>
                                <p> {props.AppointmentItems.time}</p>
                            </div>
                        } 
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                        Cancel
                        </Button>
                        <Link href="/login">
                        <Button  variant="contained" onClick={handleClose} color="primary">
                            Ok
                        </Button>
                        </Link>
                    </DialogActions>
                    </Dialog>
             </Box>
           
                
      </Grid >
  );
};

export default (AppointmentItem);