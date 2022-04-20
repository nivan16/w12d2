import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);

        //this will be used to hold form info i think!
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value}) //why is this in an array??
        }
    }

    handleSubmit(e){
        e.preventDefault(); //to prevent the re-render from the form submite
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push('./chirps')) //change the page to the chirps page

    }
    
    render() {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                
                <form>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                    </label>

                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }

}

export default Signup;