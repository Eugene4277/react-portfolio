import React from "react";

function Projects(props) {
  return (
    <>
      <h1 className="cover-heading"></h1>
      <p className="lead">
        <a
          className="project-link"
          target="_blank"
          href="https://blog-1fa47.web.app/"
        >
          Simple blog
        </a>{" "}
        where you can read posts, comments, add comments if you are signed in,
        also you can sign up.
      </p>
      <p className="lead">
        <a
          className="project-link"
          target="_blank"
          href="https://timer-1c5ea.web.app/"
        >
          Simple timer
        </a>{" "}
        where you can set time , start, pause and stop timer, change title,
        change description and also edit color theme.
      </p>
    </>
  );
}

export default Projects;
