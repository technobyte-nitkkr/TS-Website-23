import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
// import Popup from "reactjs-popup";
import TimeLine from "../../Timeline/TimeLine";
// import "reactjs-popup/dist/index.css";
import Overlay from "react-overlay-component";
import { useState } from "react";

const NotificationList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => setIsOpen(false);
  const configs = {
    animate: true,
  };
  return (
    <div id="sponsorElementHelper" className="notificationContainer">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <div
        className="notificationBtnContainer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button btnText="View them all" />
      </div>
      {/* <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}> */}
        <TimeLine show={isOpen} onClickOutside={closeOverlay}/>
      {/* </Overlay> */}
    </div>
  );
};

export default NotificationList;
