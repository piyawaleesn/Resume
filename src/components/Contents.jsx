import React from "react";
import Communicative from "../assets/image/Communicative.svg";
import Professional from "../assets/image/Professional.svg";
import Collaborative from "../assets/image/Collaborative.svg";
import Favourite from "../assets/image/Favourite.svg";
import "./contents.css";

function Contents() {
  const description =
    "Amet minim mollit non \n deserunt ullamco est sit \n aliqua dolor do amet sint.";
  return (
    <>
      <div className="contents-container">
        <div className="heading">Why Hire Me?</div>
        <div className="information-container">
          <div className="communicative-box">
            <div className="communicative-image-box">
              <div className="communicative-circle"></div>
              <img
                src={Communicative}
                alt="Communicative"
                className="communicative-image"
              ></img>
            </div>
            <div className="text">
              <div className="text-title">Communicative</div>
              <div className="description">{description}</div>
            </div>
          </div>
          <div className="professional-box">
            <div className="professional-image-box">
              <div className="professional-circle"></div>
              <img
                src={Professional}
                alt="Professional"
                className="professional-image"
              ></img>
            </div>
            <div className="text">
              <div className="text-title">Professional</div>
              <div className="description">{description}</div>
            </div>
          </div>
          <div className="collaborative-box">
            <div className="collaborative-image-box">
              <div className="collaborative-circle"></div>
              <img
                src={Collaborative}
                alt="collaborative"
                className="collaborative-image"
              ></img>
            </div>
            <div className="text">
              <div className="text-title">Collaborative</div>
              <div className="description">{description}</div>
            </div>
          </div>
          <div className="favourite-box">
            <div className="favourite-image-box">
              <div className="favourite-circle"></div>
              <img
                src={Favourite}
                alt="Favourite"
                className="favourite-image"
              ></img>
            </div>
            <div className="text">
              <div className="text-title">Favourite</div>
              <div className="description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contents;

// import React from "react";
// import "./contents.css";
// import information from "./information";
// import "./contents.css";

// function Contents() {
//   return (
//     <>
//       <div className="contents-container">
//         <div className="heading">Why Hire Me?</div>
//         <information />
//       </div>
//     </>
//   );
// }

// export default Contents;
