import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import LoginPage from "./LoginPage";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
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
            <LoginPage />
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
