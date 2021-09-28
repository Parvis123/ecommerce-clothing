import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";
import SigninSignup from "./components/signin-signup/SigninSignup";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
