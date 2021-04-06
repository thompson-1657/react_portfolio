import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/nav"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import PageFooter from "./components/footer"
import "../src/App.css"

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <PageFooter />
  </Router>
  );
}

export default App;
