import React from "react";
import SignupContainer from "./session/signup_container";
// import Login from "./session/login_container";
// import LandingPage from "./landing_page/landing_page";
import { Route } from "react-router-dom";


const App = () => (
   <div>
       <h1>Hey bestie this is React</h1>
       {/* <Route expact path="/" component={LandingPage} /> */}
       <Route path="/signup" component={SignupContainer} />
       {/* <Route path="/login" component={Login} /> */}
   </div>
);


export default App;