import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import DeveloperProfile from "./pages/developerProfile.js";
import ErrorScreen from "./pages/errorScreen.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/user/:id" component={DeveloperProfile} />
        <Route exact path="/" component={Dashboard} />
        <Route path="*" component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
