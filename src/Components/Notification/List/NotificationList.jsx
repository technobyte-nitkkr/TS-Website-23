import { useState, useEffect } from "react";
import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
import TimeLine from "../../Timeline/TimeLine";
import axios from "axios";
import Event from "../../Events/EventDetail/Event";
import ExpandedNotification from "../ExpandedNotification/ExpandedNotification";

const NotificationList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [expandedObj, setExpandedObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    axios.get("/notification").then((res) => {
      const notifications = res.data.data.notifications;
      setNotifs(notifications);
      let obj = {};

      notifications.forEach((notif) => {
        obj[notif.notification.title] = {
          ...notif.notification,
        };
      });

      setExpandedObj(obj);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <div id="sponsorElementHelper" className="notificationContainer">
          <h2
            style={{
              color: "#FFF",
              fontSize: "32px",
              fontWeight: 600,
              fontFamily: "JetBrainsMono",
              paddingLeft: "8px",
            }}
          >
            {" "}
            Recent Notifications:{" "}
          </h2>
          {Object.keys(expandedObj).map((notif, key) => (
            <NotificationItem
              title={notif}
              content={notif.description}
              key={key}
            />
          ))}

          <div
            className="notificationBtnContainer"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Button btnText="View them all" />
          </div>
          {isOpen && (
            <ExpandedNotification show={isOpen} onClickOutside={closeOverlay} />
          )}
        </div>
      )}
    </>
  );
};

export default NotificationList;
