import Button from "../Button/Button";
import "./Model.scss";

import Github from "../../github.png";

const Accessories = () => {
  return (
    <div className="image-overlay">
      <div className="name">
        <h1>Accessories</h1>
      </div>
      <div className="buttons">
        <div>
          <Button text="shop now" background="dark" />
        </div>
        <ul>
          <li>
            <a href="https://github.com/JakubBednarz25" target="_blank">
              <img src={Github} />
            </a>
          </li>
          <li>
            All rights reserved to Tesla - I do not own any images on this site.
            This is purely a reconstruction of Teslas website to test my
            frontend skills.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accessories;
