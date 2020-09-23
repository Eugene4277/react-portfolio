import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App(props) {
  return (
    <BrowserRouter>
      <div className="main-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <Contacts />
        <main role="main" className="inner cover">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/aboutme" component={About} />
            <Route path="/pet-projects" component={Projects} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
