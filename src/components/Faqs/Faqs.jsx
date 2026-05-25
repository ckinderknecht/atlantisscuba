import './Faqs.scss';

export default function Faqs() {
  return (
    <section id="faqs">
      <div className="faq-inner container">
        <div className="faq-heading">
          <span className="faq-subtitle">Good Questions.</span>
          <h2>Straight<br/>Answers</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            <article className="faq-item">
              <h3>Who are you and how long have you been in business?</h3>
              <p>
                A veteran and family owned PADI 5 Star brick-and-mortar dive shop in the Dallas-Fort Worth Metroplex, open since 1996, teaching scuba full time for over 30 years. It has been our privilege to train generations of divers, from complete beginners to dive professionals.
              </p>
            </article>

            <article className="faq-item">
              <h3>How much does scuba certification cost at your DFW shop?</h3>
              <p>
                Three packages. Base is $379: PADI eLearning, three pool sessions, and four lake certification dives. Deluxe is $499: everything in Base plus a Thursday evening session (7-10pm at the shop) covering pro tips and tricks, Peak Performance Buoyancy, and Dive Computer Introduction, with PPB continuing through pool and lake sessions. Platinum is $589: everything in Deluxe plus concierge equipment service, meaning we move all shop gear to and from the lake so you don't have to.
              </p>
            </article>

            <article className="faq-item">
              <h3>How long does it take to get scuba certified near Dallas?</h3>
              <p>
                Two weekends. The first covers three pool sessions on Friday, Saturday, and Sunday. The following weekend is four lake certification dives, typically Saturday morning and Sunday afternoon, weather dependent. Deluxe and Platinum add a Thursday evening session the week pool training begins.
              </p>
            </article>

            <article className="faq-item">
              <h3>What gear do I need to bring and what is provided?</h3>
              <p>
              We provide the tank, BCD, regulator, weights, and wetsuit. You supply the personal fit items: mask, snorkel, fins, and boots.<br/>
Is there a student discount on gear? Yes. Students receive a 10% discount on mask, snorkel, fins, and boots purchased from us, plus a $50 rebate off your course tuition when you source that personal gear here. Honest pricing, no markup games.
              </p>
            </article>

            <article className="faq-item">
              <h3>What pool do you use and where is it?</h3>
              <p>
                An indoor, heated, Olympic-sized pool in Southlake, TX. It has a 3-foot shallow end, a 5–8-foot mid-section, and a 13-foot diving well.<br/>
What is your student-to-instructor ratio? We target 4:1 in the pool and at the lake. With younger students, especially during open water lake dives, that drops to 2:1 or 1:1 depending on conditions and the individual.
              </p>
            </article>

            <article className="faq-item">
              <h3>What certification agency do you use?</h3>
              <p>
                PADI, the world's most widely recognized scuba certification agency, with nearly 60 years of training history. A PADI Open Water card is recognized by dive operators worldwide.
              </p>
            </article>
          </div>

          <div className="faq-column">
            <article className="faq-item">
              <h3>What is PADI eLearning and is it included?</h3>
              <p>
                Yes, it's included in every package, a $250 value. It's a comprehensive digital manual with embedded videos and self-paced exams you complete on your own schedule before pool sessions begin. It takes about 9 hours. The more you put into it, the better prepared you'll be in the water.
              </p>
            </article>

            <article className="faq-item">
              <h3>What happens at the lake?</h3>
              <p>
                Four certification dives over two days, typically Saturday morning and Sunday afternoon, weather dependent. This is where skills are evaluated and your Open Water certification is completed.
              </p>
            </article>

            <article className="faq-item">
              <h3>What does the Platinum package add that Deluxe doesn't?</h3>
              <p>
                Concierge equipment service. We transport all shop gear to and from the lake. It's staged and ready when you arrive. When you're done, leave it disassembled on the boat bench, we handle the rest.
              </p>
            </article>

            <article className="faq-item">
              <h3>Do you offer private scuba lessons in DFW?</h3>
              <p>
                Yes. Private instruction and additional practice sessions are available on request. At the Open Water level they're rarely needed, because we don't cram everything into long exhausting days to begin with. That said, like golf or tennis, plenty of divers hire a pro just to sharpen their game over time. We've been doing this full time for 30 years and can take you as far in diving as you want to go.
              </p>
            </article>

            <article className="faq-item">
              <h3>Do you service scuba equipment and offer air fills?</h3>
              <p>
                Yes. We service most major regulator and BCD brands, provide air fills, and perform hydrostatic and visual tank testing.
              </p>
            </article>

            <article className="faq-item">
              <h3>Do you offer dive travel from DFW?</h3>
              <p>
                Yes. We offer some of the most robust dive travel in the DFW Metroplex. There's a real difference between traveling with a guide who knows a destination above the water and one who knows it below, too. Check our trip board or reach out and we'll tailor a trip to you.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
