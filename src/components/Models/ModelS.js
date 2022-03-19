import Button from "../Button/Button";
import "./Model.scss";

const ModelS = () => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Model S</h1>
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

export default ModelS;
