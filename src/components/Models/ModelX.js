import Button from "../Button/Button";
import "./Model.scss";

const ModelX = () => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Model X</h1>
      </div>
      <div className="buttons">
        <div>
          <Button text="custom order" background="dark" />
          <Button text="available inventory" background="light" />
        </div>
      </div>
    </div>
  );
};

export default ModelX;
