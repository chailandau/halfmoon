import axios from "axios";
import dynamic from "next/dynamic";
import IconArrow from "../svg/IconArrow";
let Scroll = require("react-scroll");
let scroll = Scroll.animateScroll;

const Modal = dynamic(() => import("../components/DrinkInfo/Modal"), { ssr: false });

let scrollTop = () => {
    // include this so it works with ssr
    if (typeof window !== "undefined") {
        scroll.scrollToTop({ duration: 750 });
    }
};

const Home = ({ spirits }) => {
    return (
        <div>
            {spirits?.map((spirit) => {
                return (
                    <div
                        className="spirit-section"
                        id={spirit?.title?.toLowerCase()}
                        key={spirit?.title}
                    >
                        <div className="wrapper">
                            <div className="spirit-type">
                                <h2 className="spirit-title">{spirit.title}</h2>
                                <div className="drinks">
                                    {spirit?.drinks?.map((drink) => {
                                        return (
                                            <div className="drink-indiv" key={drink.title}>
                                                <h3 className="drink-title">{drink.title}</h3>
                                                {drink?.description && <p>{drink.description}</p>}
                                                <Modal data={drink} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <a onClick={scrollTop}>
                <IconArrow />
            </a>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const spiritsRes = await axios.get(`${process.env.PAYLOAD_API_URL}/spirits/`);
    return {
        revalidate: 1,
        props: {
            spirits: spiritsRes.data.docs,
        },
    };
}
