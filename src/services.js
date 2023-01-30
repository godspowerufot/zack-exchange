import React from "react";
import "./component/navbar.css";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import invest from "./investment.png";
import about from "./about.jpg";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";

function Services() {
  const itemList = [
    {
      text: "Mission",
      link: "Our goal is to inform people about cryptocurrencies and how to profit from them.",
      icon: <CrisisAlertIcon style={{ fontSize: "40px" }} />,
    },
    {
      text: "Vision",
      link: "Our vision is to develop well-versed crypto-influencers who will make a difference in the industry",
      icon: <RemoveRedEyeSharpIcon style={{ fontSize: "40px" }} />,
    },
  ];
  return (
    <div style={{ paddingTop: "10%" }}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "38px",
          fontFamily: "Roboto",
          fontWeight: "600",
        }}
      >
        Trade{" "}
        <span
          style={{
            color: "lightblue",
            paddingLeft: "10px",
            fontFamily: "Lato",
          }}
        >
          securely{" "}
        </span>
        & market the high growth cryptocurrencies
      </h2>
      <div
        className="servicesContainer"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",

          justifyContent: "center",
        }}
      >
        {itemList.map((text, index) => (
          <div className="container" key={index}>
            <div className="card" style={{ paddingTop: "5%", height: "50vh" }}>
              <div className="icon">{text.icon}</div>

              <div className="cardtitle">
                <h2
                  style={{
                    fontSize: "30px",
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    paddingTop: "3px",
                  }}
                >
                  {text.text}
                </h2>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Lato",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  textAlign: "center",
                }}
              >
                {text.link}
              </p>
            </div>
          </div>
        ))}
      </div>
      <section
        class="features-section"
        id="features"
        style={{ PaddingTop: "10%", marginTop: "10%" }}
      >
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
            Market sentiments, portfolio, and run the
            <span
              style={{
                color: "lightblue",
                paddingRight: "10px",
                fontSize: "38px",
                fontFamily: "Lato",
                fontWeight: "600",
              }}
            >
              infrastructure
            </span>{" "}
            of your choice
            <span
              style={{
                fontSize: "20px",
                fontWeight: "lighter",
                fontFamily: "Lato",
              }}
            >
              Crypto Trading Whether it's the bull or bear market, we'll teach
              you different techniques on how to trade any market condition
            </span>
          </span>

          <span
            className="hometext"
            style={{
              maxWidth: " 400px",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: " center",
              alignItems: "center",
              marginLeft: "30px",
              fontSize: "38px",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            <img
              src={invest}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </span>

          <span
            className="hometext"
            style={{
              maxWidth: " 400px",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: " center",
              alignItems: "center",
              paddingTop: "80px",
              marginLeft: "30px",
              fontSize: "38px",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            <img
              src={about}
              alt="img"
              style={{ width: "80%", height: "100%" }}
            />
          </span>
          <span
            className="hometext"
            id="about"
            style={{
              maxWidth: " 400px",
              display: "flex",
              flexFlow: "row wrap",
              paddingTop: "30px",

              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "38px",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            About Zack
            <span
              style={{
                color: "lightblue",
                paddingRight: "10px",
                fontFamily: "Lato",
              }}
            >
              Exchange
            </span>{" "}
            <span
              style={{
                fontSize: "16px",
                textDecoration: "none",
                fontWeight: "lighter",
                fontFamily: "Lato",
              }}
            >
              ZackExchange is an online cryptocurrency training institute
              working on all social media platform . We are committed to
              educating people who are unfamiliar with cryptocurrency and
              guiding them toward the future of digital money ( cryptocurrency).
            </span>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Services;
