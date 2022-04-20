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
            <div className="session-form">Hi from Signup!</div>
        );
    }

}

export default Signup;