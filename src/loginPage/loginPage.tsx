import React, {useRef, useEffect, useState} from 'react';
import secondImg from '../assets/screenshot4.png'
import './loginPage.css';
import BodyDiv from "./bodyDiv/bodyDiv";
import Footer from "./footer/footer";
import MiddleDiv from "./middleDiv/middleDiv";
import BottomDiv from "./bottomDiv/bottomDiv";

function LoginPage() {

    type StateInitial = {
        screenWidth: number,
        screenHeight: number,
        rect: TRect
    }

    type TRect = {
        width: number;
        height: number,
        left: number,
        right: number,
        top: number,
        bottom: number
    }
    const divRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const resize = useResize(divRef);


    function useResize(element: React.MutableRefObject<HTMLDivElement>) {
        let [
            {screenWidth, screenHeight, rect},
            setState
        ] = useState<StateInitial>({
            screenWidth: 0,
            screenHeight: 0,
            rect: {
                width: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        });

        const onResize = () => {
            screenWidth = window.innerWidth;
            screenHeight = window.innerHeight;

            if (element && element.current) {
                const clientRect = element.current.getBoundingClientRect();
                rect = {
                    width: clientRect.width,
                    height: clientRect.height,
                    left: clientRect.left,
                    right: clientRect.right,
                    top: clientRect.top,
                    bottom: clientRect.bottom
                };
            }

            setState({screenWidth, screenHeight, rect});
        };

        useEffect(() => {
            window.addEventListener("resize", onResize, false);
            onResize();
            return () => {
                window.removeEventListener("resize", onResize, false);
            };
        }, []);

        return {screenWidth, screenHeight, rect};
    }


    return (
        <div ref={divRef ? divRef : null} className="App">

            <div className='wrapper'>

                {resize.rect.width > 875 ? <div className='phoneImg'>

                    <img className='secondImage' src={secondImg} alt=""/>

                </div> : null}

                <div className='containerLogin'>

                    <BodyDiv/>

                    <MiddleDiv/>

                    <span className='middleDivText'>Get the app.</span>

                    <BottomDiv/>

                </div>

            </div>

            <Footer/>

        </div>
    );
}

export default LoginPage;