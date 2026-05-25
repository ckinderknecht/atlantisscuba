import './Rentals.css'; 
import hammerhead from './../../assets/hammerhead.png';
import shop from './../../assets/shop.jpg';

export default function Rentals() {
return (
<section id="rentals">
<div className="container">
    <h2>Rental Equipment</h2>
    <div className="head-line centerHL"></div>
    <div className="sectionInfo">
        <div className="leftInfo">
            <h4>We strive for longterm relationships not just one night&nbsp;stands.</h4>
            <p>We've been in business for over 22 years. Over that time we've met many wonderful people. The people that give us their business generally do so for several reasons honest advice, fair pricing and excellent service!</p>
        </div><div className="multiDivid"><div className="topR"></div><div className="centerLine"></div><div className="bottomL"></div></div><div className="rightInfo"><p>
        We show our appreciation for their business with continued "beyond the norm" levels of service, advice and time (refreshing isn't it?). Preferred customers get price breaks on equipment, equipment service, trips, and they also get more time and attention when they have needs that require our expertise and&nbsp;service!</p></div>
    </div>
    <div className="imgInfo">
        <div className="halfRT">
            <div className="shark"><img src={hammerhead} alt="Hammerhead"/></div>
            <div className="smShark">
                <img src={hammerhead}/>
            </div>
            <div className="imgCrop">
                <img src={shop} alt="Inside The Shop"/>
            </div>
            <div className="circles">
                <div className="lgCircle">
                    <div className="smCircle"></div>
                </div>
            </div>
        </div>
        <div className="halfLT">
            <h4>What We Rent:</h4>
            <p>Tanks, BCDs, Regulators w/ Gauges and Octos, Console Gauges, Weights and/or Weight Belts, Wet Suits and Dive&nbsp;Computers.</p>
            <div className="contactUs"><h4>Call Us To Rent Today</h4> <a className="btnOrange" href="tel:8173682755">Call Us Today<div className="arrow"></div></a></div>
        </div>
    </div>
</div>
</section>
)
}