import './Instruction.css';
import threeFish from '../../assets/threeFish.png'
import poolUnder from '../../assets/pool-underwater.jpg'
import threeFish2 from '../../assets/threeFish2.png'
import scubaLakeTall from '../../assets/scuba-lake-tall.jpg'

export default function Instruction() {
    return (
        <section id="instructions" className="notopPad">
        <div className="container">
            <div className="inst-top">
                <div className="halfLT">
                    <h1><span>PADI&nbsp;Certified&nbsp;Scuba&nbsp;Diving</span> <br/>Instruction</h1>
                    <div className="head-line"></div>
                    <p>If you are looking for quality scuba diving instruction, that's what we are about! If you are undecided and shopping around, here's a tip....take note of how many pool sessions you receive when comparing various shops. If it's one or two pool cram sessions; buyer&nbsp;beware!</p>
                </div>
                <div className="halfRT">
                    <div className="threeFish"><img src={threeFish} alt="3 Fish"/></div>
                    <div className="imgCrop"><img src={poolUnder} alt="Underwater Pool"/></div>
                    <div className="circles"><div className="lgCircle"><div className="smCircle"></div></div></div>
                </div>
            </div>
            <div className="inst-btm">
                <div className="halfRB">
                    <div className="sectionInfo">
                        <h4>Ask your friends and neighbors, you'll be surprised by how many scuba divers are out&nbsp;there.</h4>
                        <div className="multiDivid"><div className="topR"></div><div className="centerLine"></div><div className="bottomL"></div></div>
                        <p className="smChunk">
                        Odds are we've trained some of them and our reputation should speak for&nbsp;itself. DFW is actually a hotbed for scuba diving because of our fantastic airports and airlines. World class scuba diving is as close as only two and a half hours!</p>
                    </div>
                <div className="learnMore">
                    <a className="btnOrange" href="tel:8173682755">Call Us Today<div className="arrow"></div></a>
                </div>
                </div><div className="halfLB">
                    <div className="threeFish"><img src={threeFish2} alt="3 Fish"/></div>
                    <div className="imgCrop"><img src={scubaLakeTall} alt="Scuba Divers Lake"/></div>
                </div>
            </div>
           
        </div>
    </section>
    )
}