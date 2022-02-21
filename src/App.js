import "./App.css";
import { Header, Footer } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe, Portfolio, Resume, Contact } from "./Pages/index";
import css from "../src/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/aboutme" render={() => <AboutMe />} />
          <Route path="/portfolio" render={() => <Portfolio />} />
          <Route path="/resume" render={() => <Resume />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
