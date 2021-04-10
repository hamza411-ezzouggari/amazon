import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{
  /* We Need React-Router*/
}

{
  /*localhost.com*/
}

{
  /* localhost.com/checkout*/
}

{
  /* localhost.com/login*/
}
export default App;
