import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
            .then(() => this.props.history.push("/home"));
    }

    render() {
        return (
            <div className="login-container">
                <div className="spotifinalogo">
                    <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                    <h4>Spotifina</h4>
                </div>
                <div className="comeonin">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email address</label>
                    </div>
                    <div>
                        <input type="text"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.handleInput("email")} />
                    </div>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")} />
                    </div>
                    <div id="btnlogincontainer">
                        <button className="btn-login">LOG IN</button>
                    </div>
                    <h4>Don't have an account?</h4>
                
                </form>
                  
            </div>
                <div id="signuplinkcontainer">
                        <Link to="/signup">SIGN UP FOR SPOTIFINA</Link>
                </div>
            </div>
        );
    }

}

export default Login;