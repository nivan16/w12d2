import React from 'react';
import { Link } from 'react-router-dom';

                //destructuring the props!
export default ({ currentUser, logout }) => {
  //a turnery that checks to see if there is a currentUser, and displays either the first or second div!
  const display = currentUser ? ( 
    <div>
      <p>Hello, {currentUser.username}!</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  ); //end display buttons

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
