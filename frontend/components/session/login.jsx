import React from "react";
import { Link } from "react-router-dom";

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
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>Email address</label>
                    <input type="text"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={this.handleInput("email")} />
                    <label>Password</label>
                    <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput("password")} />
                    <button className="btn-login">LOG IN</button>
                    <h4>Don't have an account?</h4>
                    <Link to="/signup">SIGN UP FOR SPOTIFINA</Link>
                </form>
            </div>
        )
    }

}

export default Login;