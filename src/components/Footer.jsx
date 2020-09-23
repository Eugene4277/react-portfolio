import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <span>
          Made with
          <a
            className="footer-link"
            target="_blank"
            href="https://reactjs.org/"
          >
            ReactJs
          </a>
          by
          <a
            className="footer-link"
            target="_blank"
            href="https://github.com/Eugene4277"
          >
            Eugene
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
