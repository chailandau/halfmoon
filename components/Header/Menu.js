import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Scroll = require( "react-scroll" );
const scroll = Scroll.animateScroll;

const scrollTop = () => {
  // include this so it works with ssr
  if ( typeof window !== "undefined" ) {
    scroll.scrollToTop( { duration: 750 } );
  }
};

const Menu = () => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState( false );

  const toggleHamburger = () => {
    setHamburgerOpen( !hamburgerOpen );
  };

  useEffect( () => {
    let html = document.querySelector( "html" );
    let menuLinks = document.querySelectorAll( "header nav > ul > li > a" );

    if ( hamburgerOpen ) {
      html.classList.add( "nav-open" );
      // close mobile menu if click on link
      menuLinks.forEach( menuLink => {
        menuLink.addEventListener( "click", ()=> {
          html.classList.remove( "nav-open" );
          // need to toggle state as well
          setHamburgerOpen( !hamburgerOpen );
        } );
      } );
    }
    else {
      html.classList.remove( "nav-open" );
    }
  }, [hamburgerOpen] );

  return (
    <>
      <button className="menu-toggle" onClick={toggleHamburger}>
        <span className="top line"></span>
        <span className="middle line"></span>
        <span className="bottom line"></span>
      </button>
      <nav>
        <ul>
          <li>
            <a 
              onClick={scrollTop}>
              Whiskey
            </a>
          </li>
          <li>
            <Link
              to="tequila"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Tequila
            </Link>
          </li>
          <li>
            <Link
              to="vodka"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Vodka
            </Link>
          </li>
          <li>
            <Link
              to="gin"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Gin
            </Link>
          </li>
          <li>
            <Link
              to="rum"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Rum
            </Link>
          </li>
          <li>
            <Link
              to="tiki"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Tiki
            </Link>
          </li>
          <li>
            <Link
              to="other"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Other
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
