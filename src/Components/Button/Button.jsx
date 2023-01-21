import "./Button.css";

const Button = ({ symbol, btnText, btnWidth, btnHeight }) => {
  return (
    <button
      style={{ width: { btnWidth }, height: { btnHeight } }}
      className="btnContainer"
    >
      <div style={{ marginTop: "10px" , display: "flex", padding: "10px 20px", alignItems: "center"}}>
        <span className="btnTextSymbol"> {symbol} </span>{" "}
        <span style={{paddingLeft: "10px"}}> {btnText} </span>
      </div>
    </button>
  );
};

export default Button;
