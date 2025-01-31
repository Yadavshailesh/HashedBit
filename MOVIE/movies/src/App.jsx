 import React from "react";
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import MovieList from "./components/MovieList";
 import MovieDetails from "./ components/MovieDetails";
 import SeatBookingForm from "./components/SeatBookingForm";
 import BookingConfirmation from "./components/BookingConfirmation";

 const App = () => {
   return (
     <Router>
       <Switch>
         <Route path="/" exact component={MovieList} />
         <Route path="/movie/:id" component={MovieDetails} />
         <Route path="/book-seat/:id" component={SeatBookingForm} />
         <Route
           path="/booking-confirmation/:id"
           component={BookingConfirmation}
         />
       </Switch>
     </Router>
   );
 };

 export default App;
