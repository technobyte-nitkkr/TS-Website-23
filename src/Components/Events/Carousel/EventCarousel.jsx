import EventCard from "../Card/EventCard";
import Event from "../EventDetail/Event";
import papyrusVitaeEventImage from "../../../../public/assets/events/papyrus-vitae.png";
import programmingEventImage from "../../../../public/assets/events/programming.png";
import "./EventCarousel.css";
import Button from "../../Button/Button";
import Overlay from "react-overlay-component";

import { useState } from "react";

const EventCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => setIsOpen(false);
  const configs = {
    animate: true,
  };

  return (
    <div id="eventElement">
      <div className="carouselCardContainer">
        <EventCard
          eventImage={papyrusVitaeEventImage}
          eventTitle="Papyrus Vitae"
        />
        <EventCard
          eventImage={programmingEventImage}
          eventTitle="Programming"
        />
        <EventCard
          eventImage={papyrusVitaeEventImage}
          eventTitle="Papyrus Vitae"
        />
        <EventCard
          eventImage={programmingEventImage}
          eventTitle="Programming"
        />
      </div>
      <div
        className="buttonContainer"
        id="glHelper"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button btnText="View them all" />
      </div>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <Event />
      </Overlay>
    </div>
  );
};

export default EventCarousel;
