import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In-And-Sign-Up/SignInAndSignUp';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
