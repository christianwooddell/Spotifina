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
                    <label>Email address or username</label>
                    <input type="text"
                        value={this.state.email}
                        placeholder="Email address or username"
                        onChange={this.handleInput("email")} />
                    <label>Password</label>
                    <input type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput("password")} />
                    <button className="btn-login">LOG IN</button>
                </form>
            </div>
        )
    }

}

export default Login;