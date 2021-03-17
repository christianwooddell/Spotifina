import React from "react";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import LandingPage from "./landing_page/landing_page";
import { Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
   <div>

       <Route path="/home" component={LandingPage} />
       <AuthRoute path="/signup" component={SignupContainer} />
       <AuthRoute path="/login" component={LoginContainer} />
   </div>
);


export default App;