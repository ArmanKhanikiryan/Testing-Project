import React from 'react';
import'./bodyDiv.css';

function BodyDiv() {
    return (
        <div className='bodyDiv'>

            <img className='logo'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                 alt=""/>

            <div className='centerDiv'>
                <input className='input' type="text" placeholder='Phone number, username, or email'/>

                <input className='input' type="text" placeholder='Password'/>

                <button className='logButton'>Log in</button>

                <div className='linesDiv'>

                    <div className='line'></div>

                    <p>OR</p>

                    <div className='line'></div>

                </div>

            </div>

            <p className='forgot'>Forgot password?</p>

        </div>
    );
}

export default BodyDiv;