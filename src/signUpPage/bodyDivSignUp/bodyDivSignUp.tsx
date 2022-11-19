import React from 'react';
import './bodyDivSignUp.css';

function BodyDivSignUp() {
    return (
        <div className="bodyDiv">

            <img className='logo'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                 alt=""/>

            <div className='signUpRecommendation'>

                <p className='signUpRecommendationText'>Sign up to see photos and videos</p>

                <p className='signUpRecommendationText'>from your friends.</p>

            </div>
            <div className='line'></div>

            <div className='inputDiv'>

                <input className='inputs' type="text" placeholder='Mobile Number or Email'/>
                <input className='inputs' type="text" placeholder='Full Name'/>
                <input className='inputs' type="text" placeholder='Username'/>
                <input className='inputs' type="text" placeholder='Password'/>

            </div>

            <div>
                <p className='middleBodyText'>People who use our service may have uploaded your contact
                    information to Instagram. Learn More</p>
            </div>

            <div>
                <p className='middleBodyText'>By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy.</p>
            </div>
            <button className='signUpBtn'>Sign Up</button>

        </div>
    );
}

export default BodyDivSignUp;