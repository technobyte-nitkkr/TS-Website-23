import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
import Popup from "reactjs-popup";
import TimeLine from "../../Timeline/TimeLine";
// import "reactjs-popup/dist/index.css";

const NotificationList = () => {
  return (
    <div id="sponsorElementHelper" className="notificationContainer">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <div className="notificationBtnContainer">
        <Button btnText="View them all" />
        {/* <Popup
          trigger={
            <button
              // style={{ width: { btnWidth }, height: { btnHeight } }}
              className="btnContainer"
            >
              <span> View them all </span>
            </button>
          }
          position="right"
        >
        </Popup> */}
      </div>
      {/* <div className="notificationPopupContainer"> */}
      {/* <TimeLine /> */}
      {/* </div> */}
    </div>
  );
};

export default NotificationList;
