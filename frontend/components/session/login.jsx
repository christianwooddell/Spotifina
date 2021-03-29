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
        this.loginDemo = this.loginDemo.bind(this);
    }

    loginDemo(e) {
        const demoUser = {
            email: "demo@gmail.com",
            password: "password"
        }
        this.props.login(demoUser)
            .then(()=> this.props.history.push("/home"));
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
    

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }
    

    renderErrors() {
        return (
            <div className="errormessages">
                {this.props.errors.map((error, id) => (
                    <p key={id}>{error}</p>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
            <div className="login-container">
                <a href="/">
                    <div className="spotifinalogo" id="spotifinalogotop">
                        <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                        <h4>Spotifina</h4>
                    </div>
                </a>
                <div className="comeonin">
                <a className="demologin" onClick={() => this.loginDemo()}>DEMO LOGIN</a>
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
                    {this.renderErrors()}
                    <h4>Don't have an account?</h4> 
                </form>
            </div>
            </div>
                <div id="signuplinkcontainer">
                    <a href="/#/signup">SIGN UP FOR SPOTIFINA</a> 
                </div>
            </div>
        );
    }

}

export default Login;