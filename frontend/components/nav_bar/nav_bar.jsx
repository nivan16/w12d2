import React from 'react';
import { Link } from 'react-router-dom';

                //destructuring the props!
export default ({ currentUser, logout }) => {
  const display = currentUser ? ( 

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
