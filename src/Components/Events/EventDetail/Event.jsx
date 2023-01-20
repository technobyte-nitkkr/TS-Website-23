import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Modal from "../../Modal/Modal";
import Terminal from "../../Terminal/Terminal";
import "./style.css";

export default function Event({ onClickOutside, show }) {
  const [events, setEvents] = useState({});
  const [categoryWiseEvents, setCategoryWiseEvents] = useState({});
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentCategory, setCurrentCategory] = useState("Astronomy");

  const onCategorySelect = (category) => {
    axios
      .get("/events/description", {
        params: { eventCategory: category },
      })
      .then((res) => {
        const categoryEvents = res.data.data.events;
        let eventData = {};

        categoryEvents.forEach((event) => {
          eventData[event.eventName] = event;
        });

        setEvents(eventData);
        setEvent(Object.keys(eventData)[0]);
      });
  };

  useEffect(() => {
    axios.get("/events").then((res) => {
      const eventData = res.data.data.events;
      let categories = {};

      eventData.forEach((event) => {
        if (!categories[event.eventCategory])
          categories[event.eventCategory] = [event.eventName];
        else categories[event.eventCategory].push(event.eventName);
      });

      setCategoryWiseEvents(categories);
      setCurrentCategory(Object.keys(categories)[0]);
      onCategorySelect(currentCategory);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <Modal
          element={
            <EventDesc
              events={Object.keys(events)}
              //   event={Object.keys(events)[0]}
              event={event}
              eventsData={events}
            />
          }
          menuItems={Object.keys(categoryWiseEvents)}
          onMenuClick={onCategorySelect}
          show={show}
          onClickOutside={onClickOutside}
        />
      )}
    </>
  );
}

const EventDesc = ({ events, event, eventsData }) => {
  const [currentEvent, setCurrentEvent] = useState(event);

  useEffect(() => {}, [event, events, eventsData]);

  return (
    <div className="event-container">
      <div className="event-list">
        <div className="events">
          <div className="event-top event-names">
            <div>Hello World</div>
          </div>
          <div className="event-list-cont">
            {events.map((e, ind) => {
              return (
                <div
                  className={`event-indivi ${
                    currentEvent === e ? "event-indivi-active" : ""
                  }`}
                  onClick={() => setCurrentEvent(e)}
                >
                  {ind < 9 ? "0" : ""}
                  {ind + 1} <div>{e}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="event-terminal-container">
          <Terminal />
        </div>
      </div>
      <div className="event-description">
        <div className="event-top event-name">
          <img src="/assets/event/menu.svg" alt="" />
          <img src="/assets/event/git.svg" alt="" />
          <img src="/assets/event/notification.svg" alt="" />
        </div>
        <div className="event-details">
          <div className="event-heading">{currentEvent}</div>
          <img src={eventsData[currentEvent]?.poster} alt="" />
          <div>{eventsData[currentEvent]?.description}</div>
        </div>
      </div>
    </div>
  );
};
