import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsorsElementContainer">
      <div className="sponsorCarouselContainer">
        <div className="sponsorIcon">
          {" "}
          <img className="sponsorIcon" src="/assets/sponsors/stripe.svg" />{" "}
        </div>
        <div className="sponsorIcon">
          {" "}
          <img
            className="sponsorIcon"
            src="/assets/sponsors/pinterest.svg"
          />{" "}
        </div>
        <div className="sponsorIcon">
          {" "}
          <img className="sponsorIcon" src="/assets/sponsors/kpmg.svg" />{" "}
        </div>
        <div className="sponsorIcon">
          {" "}
          <img
            className="sponsorIcon"
            src="/assets/sponsors/mercedes.svg"
          />{" "}
        </div>
        <div className="sponsorIcon">
          {" "}
          <img className="sponsorIcon" src="/assets/sponsors/pg.svg" />{" "}
        </div>
        <div className="sponsorIcon">
          {" "}
          <img className="sponsorIcon" src="/assets/sponsors/telus.svg" />{" "}
        </div>
      </div>
      <div className="onboardingEmailContainer">
        <p className="onboardingEmail">
          {" "}
          Would you would like to be a part of Techspardha? <br />
          Kindly share your email below and our team would reach out to you.{" "}
        </p>
        <div className="sponsorEmailInpContainer">
          <InputBox />
          <Button btnText={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
