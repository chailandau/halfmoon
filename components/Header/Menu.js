import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";

const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

const scrollTop = () => {
    // include this so it works with ssr
    if (typeof window !== "undefined") {
        scroll.scrollToTop({ duration: 750 });
    }
};

const Menu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    useEffect(() => {
        const mobileBreakpoint = window.matchMedia("(max-width: 1199px)");

        let html = document.querySelector("html");
        let menuLinks = document.querySelectorAll("header nav > ul > li > a");
        let menuButton = document.querySelector("header nav > ul > li > button");

        // close menu when you click something on mobile
        const closeMenu = () => {
            html.classList.remove("nav-open");
            // need to toggle state as well
            setHamburgerOpen(!hamburgerOpen);
        };

        if (hamburgerOpen) {
            html.classList.add("nav-open");
            // close mobile menu if click on link
            menuLinks?.forEach((menuLink) => {
                menuLink.addEventListener("click", closeMenu);
            });
            // add in for first button too (not an a tag)
            menuButton.addEventListener("click", closeMenu);
        } else {
            html.classList.remove("nav-open");
        }

        window.addEventListener("resize", () => {
            setTimeout(() => {
                // remove nav open and reset state on resize
                if (hamburgerOpen && !mobileBreakpoint.matches) {
                    closeMenu();
                }
            }, 200);
        });
    }, [hamburgerOpen]);

    return (
        <>
            <FocusTrap active={hamburgerOpen}>
                <div>
                    <button className="menu-toggle" onClick={toggleHamburger}>
                        <span className="top line"></span>
                        <span className="middle line"></span>
                        <span className="bottom line"></span>
                    </button>

                    <nav>
                        <ul>
                            <li>
                                <button onClick={scrollTop}>Whiskey</button>
                            </li>
                            <li>
                                <Link
                                    href={"#tequila"}
                                    to="tequila"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Tequila
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#vodka"}
                                    to="vodka"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Vodka
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#gin"}
                                    to="gin"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Gin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#rum"}
                                    to="rum"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Rum
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#tiki"}
                                    to="tiki"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Tiki
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"#other"}
                                    to="other"
                                    smooth={true}
                                    offset={-100}
                                    duration={750}
                                    hashSpy={true}
                                >
                                    Other
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </FocusTrap>
        </>
    );
};

export default Menu;
