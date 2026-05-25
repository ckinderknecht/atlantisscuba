import sunset from "./../../assets/sunset.jpg";
import divers from "./../../assets/divers.jpg";
import ship from "./../../assets/ship.jpg";
import './Travel.css';
import {TRAVEL_DATES} from '../../data'
import { useState, useEffect } from "react";


const Travel = () => {
    const getWindowWidth = () => {
        return window.innerWidth;
      };
      
    const [isMobile, getWindowSize] = useState(getWindowWidth() >= 1040);
    // window.addEventListener('resize', () => {
    //     window.innerWidth > 1040 ? getWindowSize(true) : getWindowSize(false);
    // })
 
    useEffect(() => {
        const handleResize = () => {
          getWindowSize(window.innerWidth >= 1040);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section id="travel">
        <div className="container">
            {isMobile && <div className="travelImgs">
                <img src={sunset} alt="Sunset Scuba"/>
                <img src={divers} alt="Scuba Divers Ready"/>
                <img src={ship} alt="Underwater Scuba Ship"/>
            </div>}
            
            <div className="trips">
                <h2>Travel&nbsp;and Adventure</h2>
                <div className="head-line"></div>
                {!isMobile && <img className="mobileShow" src={sunset}/>}
                <p><span className="emphasis">We travel a LOT!</span> Having been in business for a bit (1996) and done quite a few trips, our dive destinations are somewhat reactive in nature these days. You tell me where you'd like to go, we build interest, get people together and put the trip together! So let me know what tickles your fancy! Pick up the phone, give us a call at <a className="phoneN" href="tel:8173682755">817&#8209;368&#8209;2755</a>.</p>
                <p className="comingUp">Here are some great trips coming up!</p>
                {!isMobile && <><img className="mobileShow mSmall" src={divers} alt="Scuba Divers Ready"/>
                <img className="mobileShow mSmall" src={ship} alt="Underwater Scuba Ship"/>
                </>}
            <div className="destinations">
                {/* <div className="details">
                    <span className="soldOut">Sold Out </span><br>
                    <span className="local sOut">Tubbataha liveaboard</span>
                    <br>April 4 - April 11
                    <br>$3999 + Air
                </div> */}
                {TRAVEL_DATES.map((trip) => <div className="details" key={trip.dates}>
                    {trip.soldOut && <div className="local">Sold Out</div>}
                    <span className={`local ${trip.soldOut ? "sOut" : ""}`} >{trip.location}</span>
                    <br/>{trip.dates}
                    <br/>{trip.price}
                </div>)}
            </div>
            </div>
        </div>
    </section>
    )
};
export default Travel;