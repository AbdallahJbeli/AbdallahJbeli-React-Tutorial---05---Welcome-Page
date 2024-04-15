import React, { useState } from 'react';
import './content.css';

const Content = () => {

    const [showSignIn, setShowSignIn] = useState(true);

    const handleSwitchForm = () => {
        setShowSignIn(!showSignIn);
    }

  return (
    <div className='content'>
      <div className='form-container'>
        <h1 className='heading'>Welcome to our Site</h1>

    {showSignIn ? (
        <form>
            <h2>Sign In</h2>
            <input type='email' placeholder='Email' className='input-field'/>
            <input type='password' placeholder='Password' className='input-field'/>
            <button type='submit' className='submit-button'>Sign In</button>
            <p>Don't have an account?</p> <button onClick={handleSwitchForm} className='switch-button'>Sign Up</button>
        </form>
    ) : (
        <form>
            <h2>Sign Up</h2>
            <input type='text' placeholder='Name' className='input-field'/>
            <input type='email' placeholder='Email' className='input-field'/>
            <input type='password' placeholder='Password' className='input-field'/>
            <button type='submit' className='submit-button'>Sign Up</button>
            <p>Already have an account?</p> <button onClick={handleSwitchForm} className='switch-button'>Sign In</button>
        </form>
    )}
      </div>
    </div>
  )
}

export default Content;
