import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import "./index.css";
import { Layout } from "antd";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Customer from "./Pages/Customer/Customer";
import AntLayout from "./Component/AntLayout/AntLayout";
import Product from "./Pages/Product/Product";
import Quotes from "./Pages/Quotes/Quotes";
import ViewList from "./Pages/ViewList/ViewList";
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AntLayout>
            <Route path="/" component={Dashboard} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/customer" component={Customer} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/quote" component={Quotes} />
            <Route path="/viewlist" component={ViewList} />
          </AntLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
