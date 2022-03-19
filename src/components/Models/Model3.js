import Button from "../Button/Button";
import "./Model.scss";

const Model3 = ({ scroll }) => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Model 3</h1>
        <p>
          1% Company Car Tax. <a>Learn More</a>
        </p>
      </div>
      <div className="buttons">
        <div className="buttons-container">
          <Button text="custom order" background="dark" />
          <Button text="available inventory" background="light" />
        </div>
        <div className="schedule">
          <a>Schedule a Touchless Test Drive</a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              scroll();
            }}
          >
            <path
              d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z"
              fill="currentColor"
            />
            <path d="M19 16.3432H5V18.3432H19V16.3432Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Model3;
