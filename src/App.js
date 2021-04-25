import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null;
  
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => { 
      console.log(user);
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser = { currentUser }/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </div>
    );
  }
}

export default App;
