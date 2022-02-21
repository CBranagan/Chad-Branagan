import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" render={() => <Main />}></Route>
          <Route exact path="/portfolio" render={() => <Portfolio />}></Route>
          <Route exact path="/resume" render={() => <Resume />}></Route>
          {/* <Route exact path="/" render={() => <Main />}></Route> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
