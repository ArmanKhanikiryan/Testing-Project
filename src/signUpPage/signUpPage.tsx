import React from 'react';
import './signUpPage.css';
import BodyDivSignUp from "./bodyDivSignUp/bodyDivSignUp";
import MiddleDivSignUp from "./middleDivSignUp/middleDivSignUp";
import BottomDivSignUp from "./bottomDivSignUp/bottomDivSignUp";
import FooterSignUp from "./footerSignUp/footerSignUp";

function SignUpPage() {


    return (
        <div className='App'>

            <div className='wrapper'>

                <div className='signUpDiv'>

                    <BodyDivSignUp/>

                    <MiddleDivSignUp/>

                    <div className='middleDivText'>Get the app.</div>

                    <BottomDivSignUp/>

                </div>

            </div>

            <FooterSignUp/>

        </div>
    );
}

export default SignUpPage;

