import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";



class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "", 
            dob_month: "",
            dob_day: "",
            dob_year: "", 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    loginDemo(e) {
        const demoUser = {
            email: "demo@gmail.com",
            password: "password"
        }
        this.props.login(demoUser)
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

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then( () => this.props.history.push("/home"));
    }

    render(){
        return (
            <div className="session-form">
                <a href="/">
                    <div className="spotifinalogo" id="spotifinalogotop">
                        <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
                        
                        <h4>Spotifina</h4>
                    </div>
                </a>
                <h3>Sign up for free to start listening.</h3>
                <div className="demologincontainer">
                    <a className="demologin" onClick={() => this.loginDemo()}>DEMO LOGIN</a>
                </div>
                <form>
                    <div className="inputbox">
                        <div>
                            <label>What's your email?</label>
                        </div>
                            <input className="littlebox" type="email"
                                value={this.state.email}
                                placeholder="Enter your email."
                                onChange={this.handleInput("email")} />
    
                    </div>
                    <div className="inputbox">
                        <div>
                            <label>Create a password</label>
                        </div>
                        <input className="littlebox" type="password"
                            value={this.state.password}
                            placeholder="Create a password."
                            onChange={this.handleInput("password")} />
                    </div>
                    
                    <div className="inputbox">
                        <div>
                            <label>What should we call you?</label>
                        </div>
                        <input className="littlebox" type="text" 
                        value={this.state.username} 
                        placeholder="Enter a profile name." 
                        onChange={this.handleInput("username")} />
                        <p>This appears on your profile.</p>
                    
                    </div>
                    
           
                    <div className="dob">
                        <div>
                            <label>What's your date of birth?</label>
                        </div>
                        <div className="bdaybox">
                            <label className="choiceunit">Month</label>
                            <div className="month">
                                <select id="register-dob_month" onChange={this.handleInput("dob_month")}>
                                    <option value defaultValue>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <label className="choiceunit">Day</label>
                            <div className="register-dob_day">
                                <input type="text" placeholder="DD" onChange={this.handleInput("dob_day")} />
                            </div>
                            <label className="choiceunit">Year</label>
                            <div className="register-dob_year">
                                <input type="text" placeholder="YYYY" onChange={this.handleInput("dob_year")} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>What's your gender?</label>
                    </div>
                    <div className="genderchoices">
                        <label className="choiceunit">
                            <input type="radio"
                                name="gender"
                                value="Male"
                                onChange={this.handleInput("gender")} />Male
                        </label>
                        <label className="choiceunit">
                            <input type="radio"
                                name="gender"
                                value="Female"
                                onChange={this.handleInput("gender")} />Female
                        </label>
                        <label className="choiceunit">
                            <input type="radio"
                                name="gender"
                                value="Non-binary"
                                onChange={this.handleInput("gender")} />Non-binary
                        </label>
                    </div>
                    <p>By clicking on Sign up, you agree to Spotifina's Terms and Conditions of Use.</p>
                    <p>To learn more about how Spotifina collects, uses, shares and protects your personal data please read Spotifina's Privacy Policy.</p>
                    <button type="submit" className="signupbutton" onClick={this.handleSubmit}>SIGN UP</button>
                    {this.renderErrors()}
                </form>


                <h4 className="not-new-user">Have an account?
                        <Link to="/login" className="login-link">Log in.</Link>
                </h4>

            </div>
        );
    }
};

export default Signup;