import "./styles/Fallback.scss";

const Fallback = ({ small }) => {
  return (
    <div className={`fallback__container${small ? " small" : ""}`}>
      <div className="fallback">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Fallback;
