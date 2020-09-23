import React from "react";

function Contacts(props) {
  return (
    <div className="follow-me">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/Eugene4277"
            title="Check out my GitHub"
          >
            <i className="fab fa-github contact-icon"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eugene-stepanenko-020022153/"
            title="Connect on Linkedin"
          >
            <i className="fab fa-linkedin contact-icon"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/stepbystep1414/"
            title="Follow on Instagram"
          >
            <i className="fab fa-instagram contact-icon"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://web.telegram.org/@Eugene1414"
            title="Contact on Telegram"
          >
            <i class="fab fa-telegram-plane contact-icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
