import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navBar";
import Movies from "./components/movies.jsx";
import Customers from "./components/customers.jsx";
import Rentals from "./components/rentals.jsx";
import NotFound from "./components/notFound";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container p-4">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
