import "./URLBar.css";
import { HiOutlineLockClosed } from "react-icons/hi";
import { TbRefresh } from "react-icons/tb";

const URLBar = () => {
  return (
    <div className="URLBarContainer">
      <span>
        {" "}
        <HiOutlineLockClosed />{" "}
      </span>
      <span> notifications.techspardha.dev </span>
      <span>
        {" "}
        <TbRefresh />{" "}
      </span>
    </div>
  );
};

export default URLBar;
