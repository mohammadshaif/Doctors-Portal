import React, { createContext } from 'react';
import './App.css';
import DatePicker, { DateContextProvider } from './Components/DatePicker/DatePicker';
import BookAppointment from './Components/BookAppointment/BookAppointment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import DetailsApp from './Components/DetailsApp/DetailsApp';


//export const userContext = createContext();
function App() {
  return (
    <div >
     
      {/* <BookAppointment></BookAppointment>
      <PopUp></PopUp> */}
      <DateContextProvider>
        
      <Router>
          <Switch>
          <Route exact path='/'>
              <Login></Login>
            </Route>
            <Route path='/datePicker'>
                <DatePicker></DatePicker>
            </Route>
            <Route path='/bookApp'>
              <BookAppointment></BookAppointment>
            </Route>
            <Route path='/details'>
                <DetailsApp></DetailsApp>
            </Route>
            <Route path='/login'>
                <Login></Login>
            </Route>
            
          </Switch>
        </Router>
        </DateContextProvider>
    </div>
  );
}

export default App;
