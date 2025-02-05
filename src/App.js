import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Teams from "./Components/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/projects">{/* Project Component goes here */}</Route>
        </Switch>
        <Switch>
          <Route path="/">
            <Banner />
            <Teams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
