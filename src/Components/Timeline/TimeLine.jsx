import React from "react";
import Modal from "../Modal/Modal";
import Terminal from "../Terminal/Terminal";
import "./style.css";

export default function TimeLine({ show, onClickOutside }) {
  return (
    <Modal
      element={<Terminal element={<TimeLineBody />} />}
      isMenuOpen={false}
      show={show}
      onClickOutside={onClickOutside}
    />
  );
}

const TimeLineBody = () => {
  return (
    <div className="timeline-body">
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-bright">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-bright">&gt;&gt; 25TH - 25TH FEBRUARY</div>
      <div className="text-dull">&gt;&gt; 25TH - 25TH FEBRUARY</div>
    </div>
  );
};
