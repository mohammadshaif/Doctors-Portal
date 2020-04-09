import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
//import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Grid container justify="center" >
          <Box m={20} >
            <Link href="/datePicker">
            <Button variant="contained" color="primary">
            Get Appointment
            </Button>
            </Link>
            </Box>
        </Grid>
        
    );
};

export default Login;