import { useState, useEffect, useRef } from 'react';
import './Bios.scss';
import bio1 from './../../assets/Kev.jpg';
import bio2 from './../../assets/matt.jpg';
import bio3 from './../../assets/Freddy.jpg';
import bio4 from './../../assets/preston.jpg';

const bios = [
  {
    name: 'Kevin Harmon',
    image: bio1,
    copy: [
      'Kevin started diving in 1980 thanks to his wonderful mother who put him in a class as soon as he showed interest. ',

'After an 8 year stint flying for the Marines, he became a Padi instructor in 1996 and returned the favor and taught her in 1997.  ',

'She still dives today at 86:).  Kevin continues his 30+ years of teaching, stressing “make it safe, make it fun, and in that order!” and is truly blessed to also learn from his students and fellow professionals along his long aquatic journey!'
    ],
  },
  {
    name: 'Freddie “Trey” Main',
    image: bio3,
    copy: [
      'Freddie started diving in 2013 and became a PADI Instructor in 2020. He has been teaching at Atlantis Scuba ever since, working with divers of all levels.',

'He has dived around the world, with Palau as his favorite destination, and has spent time sailing through French Polynesia and the Virgin Islands, along with diving throughout the Caribbean.',
    ],
  },
  {
    name: 'Matt Albright',
    image: bio2,
    copy: [
      'Matt joined the dive life back in 2016 and hasn’t looked back since!Having gone pro in 2021 and becoming a PADI instructor in 2023 he enjoys teaching all levels of  scuba. From beginners just getting their feet wet to seasoned divers looking to challenge and expand their skills. ',

'Matt has been fortunate enough to dive all over the Caribbean! With places like Mexico, Grand Cayman, UVI, BVI, Barbados, and Roatan to name a few! ',
    ],
  },
  {
    name: 'Preston Ramsey',
    image: bio4,
    copy: [
      'Preston took his first discover scuba dive in Grand Cayman in 2019. He became a PADI Instructor in the 2023. He completed all of his training with Atlantis Scuba and has been working with Atlantis since. ',

'He has dove around the Caribbean and his favorite place to dive is the Cayman Islands',
    ],
  }
];

export default function Bios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTranslate, setDragTranslate] = useState(0);
  const trackRef = useRef(null);
  const dragData = useRef({ downX: 0, deltaX: 0, dragging: false });

  const clampIndex = (value) => Math.max(0, Math.min(value, bios.length - 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateOffset = () => {
      const card = track.querySelector('.bio-card');
      if (!card) return;
      const nextCard = card.nextElementSibling;
      const gap = nextCard
        ? nextCard.offsetLeft - (card.offsetLeft + card.offsetWidth)
        : 0;
      setSlideOffset(card.offsetWidth + gap);
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const handlePointerDown = (event) => {
    const startX = event.clientX;
    dragData.current = { downX: startX, deltaX: 0, dragging: true };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragData.current.dragging) return;
    const delta = event.clientX - dragData.current.downX;
    dragData.current.deltaX = delta;
    setDragTranslate(delta);
  };

  const handlePointerEnd = () => {
    if (!dragData.current.dragging) return;
    const delta = dragData.current.deltaX;
    dragData.current.dragging = false;
    setIsDragging(false);
    setDragTranslate(0);
    const threshold = 70;
    if (Math.abs(delta) < threshold) return;
    setActiveIndex((current) =>
      clampIndex(current - Math.sign(delta))
    );
  };

  return (
    <section id="bios">
      <div className="bios-inner">
        <div className="bios-header container">
          <h2>Meet Your Instructors</h2>
          <div className="head-line centerHL"></div>
        </div>

        <div className="bios-carousel">
          <div
            ref={trackRef}
            className={`bios-track${isDragging ? ' dragging' : ''}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={handlePointerEnd}
            style={{ transform: `translateX(calc(-${activeIndex * slideOffset}px + ${dragTranslate}px))` }}
          >
            {bios.map((bio) => (
              <article className="bio-card" key={bio.name}>
                <div className="bio-image">
                  <img src={bio.image} alt={bio.name} />
                </div>
                <div className="bio-copy">
                  <h3>{bio.name}</h3>
                  {bio.copy.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bios-dots">
          {bios.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? 'dot active' : 'dot'}
              aria-label={`Show bio ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
