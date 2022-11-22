import Logo from "./Logo";
import TagLine from './TagLine';
import ReactjsLink from "./ReactjsLink";
import GreetFrnds from './GreetFrnds';
import React, {Component} from "react";

class Header extends Component() { 
  render() {
    return(
      <header className="App-header">
        <Logo />
        <TagLine />
        <ReactjsLink />
        <GreetFrnds />
      </header>
  );
  }
 }
 
 export default Header;