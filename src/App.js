import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
