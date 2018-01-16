import React, { Component } from 'react';
import classes from './App.css';

import SideDrawer from './components/SideDrawer/SideDrawer'
import Logo from './components/Logo/Logo'
import NavigationItems from './components/NavigationItems/NavigationItems'

class App extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerHandler = () =>{
    this.setState({showSideDrawer: false});
  };

  sideDrawerToggleHandler = () =>{
      this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer}
      });
  };

  render() {
    return (
      <div className="App">
          <header>
            <div onClick={this.sideDrawerToggleHandler} className={classes.DrawerToggle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Logo/>
            <nav className={classes.DesktopOnly}>
              <NavigationItems/>
            </nav>
          </header>

          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
          <h1 className="App-title">Simple React Sidebar Example</h1>

      </div>
    );
  }
}

export default App;
