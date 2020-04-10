import React, { useEffect } from 'react';
// import fakeData from '../../fakeData';
import { useState } from 'react';
//import './Shop.css';
import Product from './Product';
//import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

const DetailsApp = () => {
    //const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
            fetch('https://guarded-sierra-66334.herokuapp.com/appoint')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    },[])
    
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        //console.log(products);
        if (products.length) {
            const previousCart = productKeys.map( existingKey => {
            const product = products.find( pd => pd.key === existingKey);
           
            return product;
            } )
            setCart(previousCart);
        }
        
    }, [products])

    

    return (
      <Grid>
      <Box textAlign="center"
        display="flex"
        flexWrap="nowrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 1200 }}
      >
        <Box p={1} bgcolor="grey.300" width={200}>
        <h4>Service Topic</h4> 
        </Box>
        <Box p={1} bgcolor="grey.300" width={200}>
        <h4 >Appoint Time</h4>
        </Box>
        <Box p={1} bgcolor="grey.300" width={200}>
        <h4>Patient Name</h4>
        </Box>
        <Box p={1} bgcolor="grey.300" width={200}>
        <h4>PhoneNumber</h4>
        </Box>
        <Box p={1} bgcolor="grey.300" width={400}>
         <h4>Patient Email</h4>
        </Box>
       
     
     
        
      </Box>
      <Box>
      {
                    products.map(pd => <Product 
                      
                        
                        
                        product={pd}
                        ></Product>)
                }
          </Box>
      </Grid>
            
        
    );
};

export default DetailsApp;