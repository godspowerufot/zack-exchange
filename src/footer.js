import React from "react";
import "./component/navbar.css";
import { Facebook } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";

function Footer() {
  return (
    <div>
      <div className="footerContainer" id="contact">
        <div className="socialLink">
          <h6 className="copy-and-social__copy">
            ©2023 ZackExchange. All rights reserved
          </h6>
        </div>
        <div className="socialIcons">
          <span>
            <a
              href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
              className="icons"
            >
              <Facebook />
            </a>
            <a href="tel:+2347089293254" className="icons">
              <Phone />
            </a>
            <a href="http://wa.me/07089293254" className="icons">
              <WhatsApp />
            </a>
            <a href="http://t.me/Zack3254" className="icons">
              <Telegram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
