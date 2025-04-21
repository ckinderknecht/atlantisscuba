import { CLASSES } from "../../data";
import './Classes.css';

export default function Classes () {
    return (
        <section id="classes">
            <div className="container">
                <h2>Upcoming Classes</h2>
                <div className="head-line centerHL"></div>
                <div className="openWater">
                    <h3>Open Water</h3>
                    <p className="headlineDescription">We use the PADI Open Water Manual; it’s yours to keep! The eLearning is also available at extra cost if you absolutely do not learn well reading, but reading the manual is generally superior, we have found. We also supply a loaner DVD to supplement “visual learning” the manual. Additionally, hands on the gear time is offered and recommended prior to starting the course.
        <br /> <br />
For the Open Water portion, we’re not married to a single locale….we do what is best for our students! Depending on the time of year, this could be Clear Springs Scuba Park, Athens Scuba Park, Lake Murray or abroad by referral.</p>
                    <div className="classContainer">
                    {CLASSES.map((single) => <div key={single.month + single.classDays}className="owCards">
                        <span className="year">{single.year}</span>
                        <span className="month">{single.month}</span>
                        <span className="local">Class/Pool</span>
                        <span className="dates">{single.classDays}</span>
                        <span className="local">Open Water</span>
                        <span className="dates">{single.lakeDays}</span>
                    </div>)}
                    </div>
                </div>
           
            <div className="advanced">
                <h3>Advanced Open Water</h3>
                <p className="headlineDescription">PADI NITROX Certification, PADI Rescue, useful PADI Specialties such as Navigation, Equipment, Digital U/W Photo, Peak Performance Buoyancy, as well as PADI Divemaster.</p>
                <div className="classContainer">
                    {/* <div className="aowCards">
                        <span className="aowTitle">Advanced<br /> 
                        Open Water</span>
                        <span className="aowMonth">July</span>
                        <div className="owDivide"></div>
                        <span className="aowLocal">Class/Pool</span>
                        <span className="aowDates">18, 23</span>
                        <span className="aowLocal">Check Out</span>
                        <span className="aowDates">27, 28</span>
                    </div>
                    <div className="aowCards">
                        <span className="aowTitle">PADI Navigation<br />
                            Specialty</span>
                        <span className="aowMonth">October</span>
                        <div className="owDivide"></div>
                        <span className="aowLocal">Class/Pool</span>
                        <span className="aowDates">5</span>
                        <span className="aowLocal">Check Out</span>
                        <span className="aowDates">9</span>
                    </div><div className="aowCards">
                        <span className="aowTitle">PADI<br />
                            Rescue</span>
                        <span className="aowMonth">October</span>
                        <div className="owDivide"></div>
                        <span className="aowLocal">Class/Pool</span>
                        <span className="aowDates">11, 13</span>
                        <span className="aowLocal">Check Out</span>
                        <span className="aowDates">29, 30</span>
                    </div> */}
                    {/* <div className="aowCards">
                        <span className="aowTitle">Advanced<br/>Open Water</span>
                        <div className="details">
                            <span className="year">2024</span>
                            <span className="month">August</span>
                            
                            <span className="local">Class/Pool</span>
                            <span className="dates">21</span>
                            <span className="local">Check out</span>
                            <span className="dates">Aug 31, Sep 1</span>
                        </div>
                    </div> */}
                    <div className="aowCards">
                        <span className="aowTitle">PADI<br />
                                NITROX</span>
                        <div className="details">
                            {/* <span className="year">2024</span> */}
                            <span className="local">As Needed</span>
                            <span className="dates">Immediately prior<br/>to our trips<br/>or yours</span>

                        </div>
                    </div>
                    {/* <div className="aowCards">
                        <span className="aowTitle">PADI<br/>Rescue<br/></span>
                        <div className="details">
                            <span className="year">2024</span>
                            <span className="month">September</span>
                            
                            <span className="local">Class/Pool</span>
                            <span className="dates">sep 24, 26, Oct 3</span>
                            <span className="local">Check out</span>
                            <span className="dates">Oct 5, 6</span>
                        </div>
                    </div> */}
                    <div className="aowCards">
                        <span className="aowTitle">PADI<br />
                                Specialties</span>
                        <div className="details">
                            {/* <span className="year">2024</span> */}
                            {/* <span className="month">December</span> */}
                            
                            {/* <span className="local">Equipment</span>
                            <span className="dates">Dec. 10, 12, 17</span> */}
                            <span className="local">Refresher</span>
                            <span className="dates">Upon Request</span>
                            {/* <span className="local">U/W Navigation</span>
                            <span className="dates">Class: Sep 14,<br/>Check: Sep 22</span> */}
                        </div>
                    </div>
                    {/* <div className="aowCards">
                        <span className="aowTitle">PADI NITROX<br/> Certification</span>
                        <div className="details">
                          <span className="aowOther">Available on Request at <a href="https://shop.padi.com/catalog?lang=en&irra=18723" target="_blank">padi.com</a></span>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="schP">
                <h3>SCHEDULING PROBLEM?</h3>
                <h4>Usually not a problem!</h4>
                <p>From semi-private to private courses&nbsp;available.<br />
            We can work with just about any&nbsp;schedule!</p>
            <div className="learnMore">
                    <a className="btnOrange" href="tel:8173682755">Call Us Today<div className="arrow"></div></a>
                </div>
            </div>
        </div>
    </section>
    )
}