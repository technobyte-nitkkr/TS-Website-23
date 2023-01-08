import NotificationList from "../Notification/List/NotificationList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeftContainer">
        <div className="titleContainer">
          <h1 className="techspardha"> TECHSPARDHA </h1>
          <h3 className="festTheme"> UNRAVELLING DIMENSIONS </h3>
          <div className="presentedBy">
            Presented By:{" "}
            <span className="presenterLogo">
              {" "}
              <img className="presenter" src="/assets/do.svg" />{" "}
            </span>
            <span className="presenterLogo">
              {" "}
              <img className="presenter" src="/assets/appwrite.svg" />{" "}
            </span>
            <span className="presenterLogo">
              {" "}
              <img className="presenter" src="/assets/docker.svg" />{" "}
            </span>
          </div>
          <NotificationList />
        </div>
      </div>
      <div className="homeRightContainer">
        <div className="elementContainer">
          <img src="/assets/element.svg" className="elementSVG" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
