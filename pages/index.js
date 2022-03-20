/* eslint-disable max-len */
import Drinks from "../components/Spirits/Drinks";
import ArrowIcon from "../svg/ArrowIcon";
let Scroll = require( "react-scroll" );
let scroll = Scroll.animateScroll;

let scrollTop = () => {
  // include this so it works with ssr
  if ( typeof window !== "undefined" ) {
    scroll.scrollToTop( { duration: 750 } );
  }
};

const Home = () => {
  return (
    <div>
      <Drinks />
      <a onClick={scrollTop}>
        <ArrowIcon />
      </a>
     
    </div>
  );
};

export default Home;
