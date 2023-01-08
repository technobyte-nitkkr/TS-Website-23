import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";

const NotificationList = () => {
  return (
    <div className="notificationContainer">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <div className="notificationBtnContainer">
        <Button btnText="View them all" />
      </div>
    </div>
  );
};

export default NotificationList;
