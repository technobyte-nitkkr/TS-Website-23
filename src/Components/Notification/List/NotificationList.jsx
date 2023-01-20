import { useState, useEffect } from "react";
import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
import TimeLine from "../../Timeline/TimeLine";
import axios from "axios";
import Event from "../../Events/EventDetail/Event";

const NotificationList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const closeOverlay = () => setIsOpen(false);

  useEffect(() => {
    axios.get("/notification").then((res) => {
      const notifications = res.data.data.notifications;
      console.log(notifications);
      setNotifs(notifications);
    });
  }, []);

  return (
    <div id="sponsorElementHelper" className="notificationContainer">
      {notifs.map((notif) => (
        <NotificationItem
          title={notif.notification.title}
          content={notif.notification.description}
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
      <Event show={isOpen} onClickOutside={closeOverlay} />
    </div>
  );
};

export default NotificationList;
