import URLBar from "./URL-Bar/URLBar";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Popup.css";
import NotificationItem from "../Notification/Item/NotificationItem";

const Popup = () => {
  return (
    <div className="popupContainer">
      <div className="popupTopBarContainer">
        {/**url bar */}
        <URLBar />
      </div>
      <div className="popupBodyContainer">
        <div className="popupSidebar">
          {/** side bar toggle */}
          <GiHamburgerMenu />
        </div>
        <div className="popupContentSection">
          <div className="popupMenuOptions">
            {/** terminal and other bars */}
            <div className="popupMenuItem">Notifications</div>
            <div className="popupMenuItem">Notifications</div>
          </div>
          <div className="popupData">
            {/** notifications  */}
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
