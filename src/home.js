import React from "react";
import homelogo from "./home.png";
import "./index.css";

function Home() {
  return (
    <>
      <div className="homepage">
        <div
          className="HomepageContainer"
          style={{
            width: "100%",
            display: " flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <span
            className="hometext"
            style={{
              maxWidth: " 400px",
              display: "flex",
              flexFlow: "row wrap",

              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "38px",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            Trade With a{" "}
            <span
              style={{
                color: "lightblue",
                paddingLeft: "8px",
                fontWeight: "bolder",
                fontFamily: "Lato",
                fontSize: "38px",
              }}
            >
              new
            </span>{" "}
            way in a new world
            <span style={{ fontSize: "23px", fontFamiily: "Lato" }}>
              Crypto Trading Whether it's the bull or bear market, learn
              different techniques on how to trade any market condition.
            </span>
          </span>

          <span
            className="text"
            style={{
              maxWidth: " 400px",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: " center",
              alignItems: "center",
              marginLeft: "30px",
              marginTop: "10px",
              fontFamily: "Lato",
            }}
          >
            <img
              src={homelogo}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
