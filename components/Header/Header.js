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
  const [ scrolled, setScrolled ] = useState( false );
  useEffect( () => {
    let body = document.querySelector( "body" );
    let mobile = window.matchMedia( "(max-width: 991px)" );
    window.onscroll = function() {
      if ( mobile.matches ) {
        if ( window.scrollY > 225 ) {
          setScrolled( true );
          body.classList.add( "scrolled" ); 
        }
        else {
          setScrolled( false );
          body.classList.remove( "scrolled" ); 
        }
      }
      else {
        if ( window.scrollY > 300 ) {
          setScrolled( true );
          body.classList.add( "scrolled" ); 
        }
        else {
          setScrolled( false );
          body.classList.remove( "scrolled" ); 
        }
      }
    };
  }, [] );
  return (
    <header>
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
