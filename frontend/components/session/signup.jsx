import React from "react";

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "", //do radio buttons here later
            birthday: "", //fix this
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then( () => this.props.history.push("/")); //redirect to index once we're logged in
    }

    render(){
        return (
            <div className="session-form">
                <h2>Sign up</h2>
                <form>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <label>Gender:
                        <input type="text" value={this.state.gender} onChange={this.handleInput("gender")} />
                    </label>
                    <label>Birthday:
                        <input type="text" value={this.state.birthday} onChange={this.handleInput("birthday")} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;