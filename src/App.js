import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up/SignInAndSignUp';

import { auth } from './Firebase/Firebase.config';
import './App.css';




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  };
}

export default App;
