import './Footer.css';
import asLogo from './../../assets/as-logo.png';

export default function Footer() {
    return (
        <footer>
    	    <div className="container" id="contact">
    	    	<div id="footer-back">
    				<div className="foot-col foot-col1">
    					<div>
    			            <a href="https://atlantisscuba.com/"><img src={asLogo} alt="Atlantis Scuba" id="bot-logo"/></a>
    			        </div>
    			        <div>
    			            <a href="https://www.facebook.com/pg/atlantisscubasouthlaketx/photos/?ref=page_internal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a>
    			        </div>
						<div className="ratings">
							<div>
								<div className='rating'>4.5</div>
								<div className="platform">on Google</div>
							</div>
							<div>
								<div className='rating'>4.8</div>
								<div className="platform">on Yelp</div>
							</div>
						</div>
    			    </div><div className="foot-col foot-col2">
    			        <div>
    			            <p><span>Phone: </span><a href="tel:817-368-2755">817-368-2755</a><br/>
    			            	Or voice to shop <a href="tel:817-421-9200">817-421-9200</a></p>
    			            <p>855 DAVIS BLVD SUITE&nbsp;100,<br/>SOUTHLAKE, TX&nbsp;76092</p>
    			            <p>
    			            <span>Tue. - Fri. </span>2pm - 7pm<br/>
    			            <span>Saturday  </span>2pm - 6pm<br/>
    			            <span>Sun. - Mon. </span>Closed</p>
    			        </div>
    			    </div>
                    <div className="foot-col foot-col3">
    			        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4313206876814!2d-97.18165598640344!3d32.93962002931041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd69f82617e9b%3A0x290a77fe603cf65f!2sAtlantis+Scuba!5e0!3m2!1sen!2sus!4v1519444765365" frameBorder="0" allowFullScreen id="map"></iframe>
    			        </div>
    			    </div>
    		    </div>
    	    </div>
    	</footer>
    )
}