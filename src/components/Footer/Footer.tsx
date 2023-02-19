import React from "react";
import "./style.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer dark:text-black">
      <h1 className="footer-title">Follow me!</h1>
      <div className="contact">
        <a
          className="contact-link"
          target={"_blank"}
          href="https://github.com/duythong1610"
        >
          <h2 className="">Github</h2>

          <GitHubIcon />
        </a>
        <a
          className="contact-link"
          target={"_blank"}
          href={"https://www.facebook.com/16LuckyNumber"}
        >
          Facebook
          <FacebookIcon />
        </a>
        <a
          className="contact-link"
          target={"_blank"}
          href={"https://www.instagram.com/auduythong/"}
        >
          Instagram
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
