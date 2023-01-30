import React from "react";
import "./component/navbar.css";

function About() {
  return (
    <div
      className="class"
      id="services"
      style={{
        marginTop: "10%",
        marginLeft: "10%",
        textAlign: "center",
        fontFamily: "Lato",
      }}
    >
      <h2 style={{ fontSize: "28px", fontFamily: "Lato", fontWeight: "600" }}>
        Why you Should choose
        <span
          style={{
            color: "LightBlue",
            fontSize: "38px",
            fontFamily: "Lato",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "38px",
              fontFamily: "Lato",
              fontWeight: "600",
              color: "white",
              paddingLeft: "13px",
            }}
          >
            Zack
          </span>
          Exchange
        </span>
      </h2>
      <div
        className="containerWhat"
        style={{
          Width: " 200px",
          display: "inline-flex",
          flexWrap: "wrap",
          justifySelf: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="list" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "Lato" }}>
            <li>
              We open you to the traders psychology and how to properly analyze
              the market before entering a trade
            </li>
            <li>
              {" "}
              we teach you the basics and foundation of cryptocurrency, how they
              came about, advantages, disadvantages
            </li>
            <li>
              we be giving accurate trading signals to help you place successful
              trades without having to go through the stress of analyzing the
              market
            </li>
            <li>
              "how to spot a good crypto project, how to spot a rug pull(scam)
              project and lots more
            </li>
          </p>
        </span>
      </div>
    </div>
  );
}

export default About;
