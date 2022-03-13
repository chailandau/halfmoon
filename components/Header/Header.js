import Logo from "./Logo";
import Menu from "./Menu";

let Scroll = require( "react-scroll" );
let scroll = Scroll.animateScroll;

let scrollTop = () => {
  // include this so it works with ssr
  if ( typeof window !== "undefined" ) {
    scroll.scrollToTop( { duration: 750 } );
  }
};

const Header = () => {
  return (
    <header>
      <div className="wrapper">
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
  
