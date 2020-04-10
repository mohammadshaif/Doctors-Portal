import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';

const Product = (props) => {
    // console.log(props);
    const { title, time } = props.product.Service;
    const {Name,PhoneNumber,Email}  = props.product.contact


    
    console.log('oi bert',title);
    return (
        <div style={{ width: '100%' }}>
      <Box textAlign="center"
        display="flex"
        flexWrap="nowrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 1200 }}
      >
        <Box p={1} bgcolor="grey.300" width={200}>
         <h4  >{title}</h4>
        </Box>
        <Box p={1} bgcolor="grey.300" width={200}>
        <h4 >{time}</h4>
        </Box>
        <Box p={1} bgcolor="grey.300"width={200}>
        <h4 >{Name}</h4>
        </Box>
        <Box p={1} bgcolor="grey.300"width={200}>
        <h4 >{PhoneNumber}</h4>
        </Box>
        <Box p={1} bgcolor="grey.300" width={400}>
        <h4 >{Email}</h4>
        </Box>
        
     
      
        
      </Box>
    </div>
        // <Grid textAlign="center"  >
            
        //             <Box component="div" display="inline">
        //             <h2>subject</h2>
        //             <h2  >{title}</h2>
        //             </Box>
        //             <Box component="div" display="inline">
        //             <h4 >time</h4>
        //             <h4 >{time}</h4>
        //             </Box>
            
              
                
            

        // </Grid>
    );
};

export default Product;