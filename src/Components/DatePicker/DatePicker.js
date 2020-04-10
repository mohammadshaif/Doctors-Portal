import React, { useState, createContext, useContext } from "react";
import Calendar from "react-calendar/dist/umd/index";
import 'react-calendar/dist/Calendar.css';
import Grid from '@material-ui/core/Grid';
import { Box, Link } from "@material-ui/core";




const DateContext = createContext();
 export const DateContextProvider = (props)=>{
  const Date = DatePicker();
return <DateContext.Provider value={Date}>{props.children}</DateContext.Provider>
}
export const useDate =()=>{ return useContext(DateContext)}
const getDate = date=>{
  date.toString()
  return date.toString()
}

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
   const [time, setTime]=useState(null)
   
    // console.log("time date",new Date());
    const onChange = (date) => {
      setTime(date)
       setDate(date);
       
    console.log(date);
     
    };
    
    //console.log('new date',date.toString());
    return (
        <Grid container  justify="center" >
        <Box m={20} >
        <h1>Appointment</h1>
        <Link href="/bookApp">
          <Calendar  onChange={onChange } value={date}> >

          </Calendar>
          
        </Link>
        {console.log(date)}
        
        </Box>
         {/* {date.toString()} */}
       
      </Grid>
    );
};

export default DatePicker;