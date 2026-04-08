import './Schedule.css';
import oneFish from './../../assets/singleFish.png'
export default function Schedule() {
    return (
        <section id="schedule">
        <div className="container">
            <h1>Typical Schedule</h1>
            <div className="head-line centerHL"></div>
            <p className="subHeader">Class and Pool sessions are all conducted over 4 different days giving you time to process, with SLEEP, the knowledge and skills you are receiving; this is very important! 
            </p>
            <div className="typicalSchedule">
                <div className="weekOne">
                    <div className="singeFish tlFish">
                        <img src={oneFish} alt="Single Fish"/></div>
                    <div className="weekHead">
                        <h3>Week 1</h3><span className="hLine"></span>
                    </div>
                    <div className="weekDays">
                        <h4>Thu</h4>
                        <p>7pm - 10pm<br/>@ Shop</p>
                    </div>
                    <div className="weekDays">
                        <h4>Fri</h4>
                        <p>6:30pm - 8:30pm<br/> @ Pool</p>
                    </div>
                    <div className="weekDays">
                        <h4>Sat</h4>
                        <p>9am - 12pm<br/>@ Pool</p>
                        {/* <p>1:30pm - 3:30pm<br>@ Shop</p> */}
                    </div>
                    <div className="weekDays">
                        <h4>Sun</h4>
                        <p>1pm - 4:30pm<br/>@ Pool</p>
                    </div>
                    
                </div>
                <div className="weekTwo">
                    <div className="singeFish brFish"><img src={oneFish} alt="Single Fish"/></div>
                    <div className="weekHead">
                        <h3>Week 2</h3><span className="hLine"></span>
                    </div>
                    <div className="weekDays">
                        <h4>Sat</h4>
                        <p>TBD<br/>Open Water</p>
                    </div>
                    <div className="weekDays">
                        <h4>Sun</h4>
                        <p>TBD<br/>Open Water</p>
                    </div>
                </div>
            </div>
            <p className="bottomText">We DO NOT do 2 day cram sessions, take you up to the lake, sign your card and say thanks for the business, next! Our course consists of 4 days with 10-15 hours of preparation on your schedule prior to the course, one 3 hour academic review with hands on the gear, and 3 formal pool sessions in a HUGE heated indoor pool.<br/><br/>

Here's what you can typically expect in our PADI open water scuba diving certification course.</p>
        </div>
    </section>
    )
}