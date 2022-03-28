import Logo from "./Logo";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const Scroll = require( "react-scroll" );
const scroll = Scroll.animateScroll;

const scrollTop = () => {
  // include this so it works with ssr
  if ( typeof window !== "undefined" ) {
    scroll.scrollToTop( { duration: 750 } );
  }
};

const Header = () => {
  const [ headerScroll, setHeaderScroll ] = useState( "false" );
  const handleScroll = () => {
  //  setHeaderScroll( !headerScroll );
    console.log( window.scrollY );
  };

  useEffect( () => {
    window.addEventListener( "scroll", handleScroll );
    return () => window.removeEventListener( "scroll", handleScroll );
  } );
  return (
    <header onScroll={handleScroll}>
      <div className="big-wrapper">
        <div className="logo">
          <a onClick={scrollTop}>
            <Logo />
          </a>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
