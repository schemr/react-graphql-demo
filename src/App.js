import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Teams from "./Teams";
import Team from "./Team";
import Users from "./Users";
import User from "./User";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
            <main>
              <Route exact={true} path={"/"} component={Teams} />
              <Route path={"/teams/:teamId"} component={Team} />
            </main>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
