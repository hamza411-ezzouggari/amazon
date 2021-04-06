import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <h1>Home</h1>
          </Route>
          <Route path="/checkout">
            <h1>checkout</h1>
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
