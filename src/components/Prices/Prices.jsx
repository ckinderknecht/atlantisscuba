import CallTextBtns from '../CallTextBtns/CallTextBtns';
import './Prices.css';

export default function Prices() {
    return (
        <section id="prices">
            <div className="prices-inner container">
                <h3>Pricing</h3>
                <div className="price-grid">
                    <article className="price-card">
                        <span className="price-label">Base</span>
                        <div className="price-desc">
                            <p className="price-value">$399</p>
                            <p className="price-tagline">“Just the facts please, I'll take it from there!”</p>
                        </div>
                        <div className="price-copy">
                            <p className="price-copy-title">What's Included:</p>
                            <ul>
                                <li>Padi eLearning</li>
                                <li>3 pool sessions on Friday, Saturday, and Sunday</li>
                                <li>4 Lake Certification dives on following Saturday and Sunday per schedule</li>
                            </ul>
                        </div>
                    </article>

                    <article className="price-card">
                        <span className="price-label">Deluxe</span>
                        <div className="price-desc">
                            <p className="price-value">$499</p>
                            <p className="price-tagline">“I want more”</p>
                        </div>
                        <div className="price-copy">
                            <p className="price-copy-title">What's Included:</p>
                            <ul>
                                <li>Everything in Base</li>
                                <li>Pro tips and tricks</li>
                                <li>Peak Performance Buoyancy (PPB)</li>
                                <li>Dive computers explained</li>
                            </ul>
                            <p className="price-copy-note">Pool sessions and Lake dives get the added bonus of PPB sessions as well.</p>
                        </div>
                    </article>

                    <article className="price-card">
                        <span className="price-label">Platinum</span>
                        <div className="price-desc">
                            <p className="price-value">$599</p>
                            <p className="price-tagline">“I want more and I'd prefer not to schlep”</p>
                        </div>
                        <div className="price-copy">
                            <p className="price-copy-title">What's Included:</p>
                            <p>Everything in Deluxe, plus Concierge Equipment Service</p>
                            <p className="price-copy-note">A fancy way of saying we move all shop gear to and from the lake for you. It's staged and ready when you arrive, just leave it disassembled on the boat bench when you're done. Sometimes it's just nice not to schlep.</p>
                        </div>
                    </article>
                </div>
                <div className='centerOther'>Local Open Water Evaluation Option: $250 if you would rather do your four "evaluative dives" locally  rather than abroad on your trip. Fee includes Tank, BCD, Regulator, Weights, and Wetsuit</div>
                <CallTextBtns />
            </div>
        </section>
    )

}