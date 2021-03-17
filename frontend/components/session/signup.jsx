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
                <h2>GET SPOTIFINA FREE</h2>
                <form>
                    <label>Username:
                        <input type="text" 
                        value={this.state.username} 
                        placeholder="Username" 
                        onChange={this.handleInput("username")} />
                    </label>
                    <label>Email:
                        <input type="text" 
                        value={this.state.email} 
                        placeholder="Email" 
                        onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input type="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        onChange={this.handleInput("password")} />
                    </label>

                    <label>Gender:</label>
                    <label>
                        <input type="radio" 
                        value="Male" 
                        placeholder="Gender"
                        onChange={this.handleInput("gender")} />Male
                    </label>
                    <label>
                        <input type="radio" 
                        value="Female" 
                        placeholder="Gender"
                        onChange={this.handleInput("gender")} />Female
                    </label>
                    <label>
                        <input type="radio" 
                        value="Non-binary" 
                        placeholder="Gender"
                        onChange={this.handleInput("gender")} />Non-binary
                    </label>

                    <label>Birthday:
                        <input type="text" 
                        value={this.state.birthday} 
                        placeholder="Birthday"
                        onChange={this.handleInput("birthday")} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

export default Signup;