import Button from "../Button/Button";
import "./Model.scss";

const Solar = () => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Solar and Powerwall</h1>
        <p>Power Everything</p>
      </div>
      <div className="buttons">
        <div>
          <Button text="learn more" background="dark" />
        </div>
      </div>
    </div>
  );
};

export default Solar;
