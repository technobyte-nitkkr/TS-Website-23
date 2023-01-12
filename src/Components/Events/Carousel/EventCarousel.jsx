import EventCard from "../Card/EventCard";
import papyrusVitaeEventImage from "../../../../public/assets/events/papyrus-vitae.png"
import programmingEventImage from "../../../../public/assets/events/programming.png"
import "./EventCarousel.css";

const EventCarousel = () => {
  return (
    <div>
      <div className="carouselCardContainer">
        <EventCard eventImage={papyrusVitaeEventImage} eventTitle="Papyrus Vitae"/>
        <EventCard eventImage={programmingEventImage} eventTitle="Programming"/>
        <EventCard eventImage={papyrusVitaeEventImage} eventTitle="Papyrus Vitae"/>
        <EventCard eventImage={programmingEventImage} eventTitle="Programming"/>
      </div>
    </div>
  );
};

export default EventCarousel;
