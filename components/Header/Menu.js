import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Menu = () => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState( false );

  const toggleHamburger = () => {
    setHamburgerOpen( !hamburgerOpen );
    console.log( "toggle" );
  };

  useEffect( () => {
    let html = document.querySelector( "html" );
    if ( hamburgerOpen ) {
      html.classList.add( "nav-open" );
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
            <Link
              to="whiskey"
              smooth={true}
              offset={-100}
              duration={750}
              hashSpy={true}>
            Whiskey
            </Link>
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
