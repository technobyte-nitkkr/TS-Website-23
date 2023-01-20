import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./Sponsors.css";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("/sponsors").then((res) => {
      const sponsors = res.data.data.sponsors;
      console.log("sponsors: ", sponsors);
      setSponsors(sponsors);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div> Loading.... </div>
      ) : (
        <div id="sponsorElement" className="sponsorsElementContainer">
          {sponsors.map((sponsor, key) => {
            return (
              <div key={key}>
                <h3> {sponsor?.sponsorSection} </h3>
                <div className="sponsorCarouselContainer">
                  {sponsor?.sponsors.map((spons) => {
                    return (
                      <div className="sponsorIcon">
                        {" "}
                        <a href={spons?.targetUrl}>
                          <img className="sponsorIcon" src={spons?.imageUrl} />{" "}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {/*<div className="sponsorIcon">
            {" "}
            <img
              className="sponsorIcon"
              src="/assets/sponsors/stripe.svg"
            />{" "}
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
            <img
              className="sponsorIcon"
              src="/assets/sponsors/telus.svg"
            />{" "}
          </div>*/}
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
      )}
    </>
  );
};

export default Sponsors;
