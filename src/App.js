import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./components/nav"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
    <Nav />
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
  </Router>
  );
}

export default App;
