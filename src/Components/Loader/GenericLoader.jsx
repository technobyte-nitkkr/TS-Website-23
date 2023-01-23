import { useState } from "react";
import Modal from "../Modal/Modal";
import Terminal from "../Terminal/Terminal";
import "./GenericLoader.css";

const GenericLoader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeOverlay = () => setIsOpen(false);

  return (
    <Modal
      element={<Terminal element={<LoaderBody />} />}
      isMenuOpen={false}
      show={isOpen}
      onClickOutside={closeOverlay}
    />
  );
};

const LoaderBody = () => {
  <div className="timeline-body">
    <div className="text-bright">
      &gt;&gt; ✨ Fetching your notification data...
    </div>
  </div>;
};

export default GenericLoader;
