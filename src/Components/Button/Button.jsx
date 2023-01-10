import "./Button.css";

const Button = ({ symbol, btnText, btnWidth, btnHeight }) => {
  return (
    <button
      // style={{ width: { btnWidth }, height: { btnHeight } }}
      className="btnContainer"
    >
      <span className="btnTextSymbol"> {symbol} </span> <span> {btnText} </span>
    </button>
  );
};

export default Button;
