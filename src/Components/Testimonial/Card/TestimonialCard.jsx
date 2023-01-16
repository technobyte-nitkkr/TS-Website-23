import "./TestimonialCard.css";

const TestimonialCard = ({name, postition, profileImg}) => {
  return (
    <div className="testimonialCardContainer">
      <div className="testimonicalCardContent">
        <p>
          {" "}
          I was a part of Techspardha and it turned out to be a roller coaster
          ride for me. I was exposed to the world of fascinating tech through
          Techspardha. When Excalibar helped me in learning new techniques and
          enhance communication skills, Encoder was there for all my mates to
          support the competitive environment. When we were worried about our
          future, Guest Lectures by renowned personalities gave us a path to our
          goals. It is a great way to start your journey in the world of
          technology{" "}
        </p>
      </div>
      <div className="testimonicalCardPerson">
        <div className="testimonialCardPersonAvatar">
          <img src={profileImg} />
        </div>
        <div className="testimonialCardPersonName">
          <div className="personName"> {name} </div>
          <div className="personDesignation"> {postition} </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
