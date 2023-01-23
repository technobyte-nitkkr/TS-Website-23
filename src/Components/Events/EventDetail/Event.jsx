import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import GenericLoader from "../../Loader/GenericLoader";
import Modal from "../../Modal/Modal";
import Terminal from "../../Terminal/Terminal";
import "./style.css";

export default function Event({ onClickOutside, show }) {
  const [events, setEvents] = useState({});
  const [categoryWiseEvents, setCategoryWiseEvents] = useState({});
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [firstTimne, setFirstTime] = useState(true);

  const [currentCategory, setCurrentCategory] = useState("Astronomy");

  const onCategorySelect = (category) => {
    setIsFetching(true);
    setFirstTime(false);
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
        setIsFetching(false);
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
        <GenericLoader />
      ) : isFetching ? (
        <GenericLoader />
      ) : (
        <Modal
          element={
            <EventDesc
              events={Object.keys(events)}
              event={event}
              eventsData={events}
            />
          }
          menuItems={Object.keys(categoryWiseEvents)}
          onMenuClick={onCategorySelect}
          show={show}
          isMenuOpen={firstTimne}
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
            <div>Event-List.md</div>
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
          <Terminal
            element={
              <div style={{ fontFamily: "JetBrainsMono" }}>
                <p>
                  {">>"} venue: {eventsData[currentEvent]?.venue}{" "}
                </p>
                <p>
                  {">>"} Start Time:{" "}
                  {new Date(eventsData[currentEvent]?.startTime).toDateString()}{" "}
                </p>
                <p>
                  {">>"} Start Time:{" "}
                  {new Date(eventsData[currentEvent]?.endTime).toDateString()}{" "}
                </p>
                <p>
                  {">>"} Start Time:{" "}
                  {new Date(eventsData[currentEvent]?.endTime).toDateString()}{" "}
                </p>
                <p>
                  <span
                    onClick={() => {
                      axios
                        .put(
                          "/user/event",
                          {
                            eventCategory:
                              eventsData[currentEvent]?.eventCategory,
                            eventName: currentEvent,
                          },
                          {
                            headers: {
                              Authorization: localStorage.getItem("ts20token"),
                            },
                          }
                        )
                        .then((res) =>
                          alert(res.data?.message || res.data?.status)
                        )
                        .catch((err) => alert(err));
                    }}
                  >
                    {">>"}{" "}
                    <u style={{ cursor: "pointer" }}> Registration link </u>
                  </span>
                </p>
                <p>
                  {">>"} Rules: <br />
                  {eventsData[currentEvent]?.rules?.map((rule) => (
                    <span>
                      {" "}
                      {">>"} {rule} <br />{" "}
                    </span>
                  ))}
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="event-description">
        <div className="event-top event-name">
          {/* <img src="/assets/event/menu.svg" alt="" /> */}
          <img src="/TS_LOGO.svg" alt="" />
          {/* <img src="/assets/event/notification.svg" alt="" /> */}
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
