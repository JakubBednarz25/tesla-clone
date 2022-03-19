import { useState, useEffect } from "react";

import "./App.scss";

import Header from "./components/Header/Header";

import Model3 from "./components/Models/Model3.js";
import ModelY from "./components/Models/ModelY.js";
import ModelS from "./components/Models/ModelS.js";
import Solar from "./components/Models/Solar.js";
import ModelX from "./components/Models/ModelX.js";
import Accessories from "./components/Models/Accessories.js";

const slides = [
  {
    id: 1,
    url: {
      phone:
        "/delivery/public/image/tesla/85c4e661-1abf-42a9-b47f-011754b1dcf6/bvlatuR/std/600x1576/M3-Homepage-RHD-M",
      desktop:
        "/delivery/public/image/tesla/ca583b8c-7cfa-4202-9be2-1d3f0e3f24cf/bvlatuR/std/2880x1800/M3-Homepage-RHD-D",
    },
  },
  {
    id: 2,
    url: {
      phone:
        "/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY",
      desktop:
        "/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY",
    },
  },
  {
    id: 3,
    url: {
      phone:
        "/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile",
      desktop:
        "/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop",
    },
  },
  {
    id: 4,
    url: {
      phone:
        "/delivery/public/image/tesla/4a2dfc25-8931-4aae-aa41-96563261d221/bvlatuR/std/800x2100/Mobile-SolarPanels",
      desktop:
        "/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels",
    },
  },
  {
    id: 5,
    url: {
      phone:
        "/delivery/public/image/tesla/e66cecff-8c8b-49b1-ab8b-d80dd3f03b57/bvlatuR/std/600x1576/MX-Homepage-RHD-M",
      desktop:
        "/delivery/public/image/tesla/30b41f71-b79d-41a1-a29a-1c6ae23acf73/bvlatuR/std/2880x1800/MX-Homepage-RHD-D",
    },
  },
  {
    id: 6,
    url: {
      phone:
        "/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories",
      desktop:
        "/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories",
    },
  },
];

function App() {
  const [curImage, setCurImage] = useState(0);
  useEffect(() => {
    let timer = null;
    window.addEventListener(
      "scroll",
      (e) => {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          let image = Math.floor(window.pageYOffset / window.innerHeight);
          const fromTopImage = window.pageYOffset % window.innerHeight;
          // console.log(fromTopImage);
          if (window.pageYOffset < image * window.innerHeight) {
            image = Math.max(0, image - 1);
          }
          if (fromTopImage >= 100 && fromTopImage <= 300) {
            image = Math.min(5, image + 1);
          }
          window.scroll(0, image * window.innerHeight);
          setCurImage(image);
        }, 150);
      },
      false
    );
  }, []);

  return (
    <div className="App">
      <Header />
      {slides.map((slide) => {
        const img =
          window.innerWidth >= 1200 ? slide.url.desktop : slide.url.phone;
        return (
          <div
            key={slide.id}
            className="slide"
            style={{
              backgroundImage: `url(https://tesla-cdn.thron.com${img})`,
            }}
          ></div>
        );
      })}
      {curImage === 0 ? (
        <Model3
          scroll={() => {
            window.scroll(0, window.innerHeight);
            setCurImage(1);
          }}
        />
      ) : (
        <></>
      )}
      {curImage === 1 ? <ModelY /> : <></>}
      {curImage === 2 ? <ModelS /> : <></>}
      {curImage === 3 ? <Solar /> : <></>}
      {curImage === 4 ? <ModelX /> : <></>}
      {curImage === 5 ? <Accessories /> : <></>}
    </div>
  );
}

export default App;
