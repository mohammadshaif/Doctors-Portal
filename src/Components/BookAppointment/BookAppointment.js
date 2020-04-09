import React, { useState, useEffect, useContext } from 'react';
import fakeData from '../../fakeData'
import AppointmentItem from '../AppointmentItem/AppointmentItem';
import Box from '@material-ui/core/Box';
//import './Shop.css'
import Grid from '@material-ui/core/Grid';
import Calendar from "react-calendar/dist/umd/index";
import 'react-calendar/dist/Calendar.css';
//import Cart from '../Cart/Cart';
//import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useParams } from 'react-router-dom';
import { useDate } from '../DatePicker/DatePicker';


const BookAppointment = () => {

   const date = useDate();
    console.log("my date",date);

    const [AppointmentItems,setAppointmentItems]= useState(fakeData);
    const [cart,setCart]=useState([])
    
//Sync state in multiple route
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const AppointmentItemKeys = Object.keys(savedCart);
        const previousCart = AppointmentItemKeys.map(existingKey =>{
            const AppointmentItems = fakeData.find(pd => pd.key === existingKey);
            // AppointmentItems.quantity = savedCart[existingKey];
            return AppointmentItems;
        })
        setCart(previousCart);
    },[]);

   
    //ata aktu bujte hobe
    const handleAddAppointmentItems = (AppointmentItems) =>{
        //const toBeAddedKey = AppointmentItems.key;
       console.log("AppointmentItem add",AppointmentItems);
       
        // const sameAppointmentItem = cart.find(pd => pd.key === toBeAddedKey);
        // let count = 1;
        // let newCart;
        // if (sameAppointmentItem) {
        //      count = sameAppointmentItem.quantity +1;
        //     sameAppointmentItem.quantity = count;
        //     const others = cart.filter(pd =>pd.key !==toBeAddedKey)
        //     newCart = [...others,sameAppointmentItem];
        // }
        // else{
        //     AppointmentItems.quantity = 1;
        //     newCart = [...cart, AppointmentItems];
        // }
        
        // setCart(newCart);
        
        // addToDatabaseCart(AppointmentItems.key, count)

     }
  
     
    return (
        
        <Grid container spacing={3} >
           
             <Grid item xs={12}>
                <Box textAlign="center" >
                    <h1>Available Appointments On {}  </h1> 
                </Box>
            </Grid>
           
           
            {
                AppointmentItems.map(pd=><AppointmentItem
                    key = {pd.key}
                    // showAddToCart={true }
                    handleAddAppointmentItems = {handleAddAppointmentItems}
                    AppointmentItems={pd}> </AppointmentItem>)
            }  
            
        
           {/* <div className="cart-container">
                <Cart cart={cart} >
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div> */}
        </Grid>
      
    );
};


export default BookAppointment;