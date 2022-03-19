import Button from "../Button/Button";
import "./Model.scss";

const ModelY = () => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Model Y</h1>
      </div>
      <div className="buttons">
        <div>
          <Button text="custom order" background="dark" />
          <Button text="learn more" background="light" />
        </div>
      </div>
    </div>
  );
};

export default ModelY;
