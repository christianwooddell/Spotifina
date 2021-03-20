import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        this.props.logout()
            .then(()=> this.props.history.push("/"));
    }
    render() {
        const {currentUser} = this.props;
        return(
            <div>
                <h1>look at all these songs bestie!</h1>
                <button className="logout" onClick={()=> this.logoutUser()}>Log out</button>
            </div>
        )
    }
}

export default HomePage;

