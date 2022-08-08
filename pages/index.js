import axios from "axios";
import dynamic from "next/dynamic";
import IconArrow from "../svg/IconArrow";
let Scroll = require("react-scroll");
let scroll = Scroll.animateScroll;

const Modal = dynamic(() => import("../components/DrinkInfo/Modal"), { ssr: false });

// populated query for strapi
const qs = require("qs");
const query = qs.stringify(
    {
        populate: ["Drinks", "Drinks.Ingredients", "Drinks.Instructions", "Drinks.Optional"],
        sort: "Order",
    },

    { encodeValuesOnly: true }
);

let scrollTop = () => {
    // include this so it works with ssr
    if (typeof window !== "undefined") {
        scroll.scrollToTop({ duration: 750 });
    }
};

const Home = ({ spirits }) => {
    const spiritType = spirits.data;
    // console.log(spiritType);
    // console.log(spiritType[2].attributes.Name);
    // console.log(spiritType[2].attributes.Drinks.data[0].attributes);
    return (
        <div>
            {spiritType.map(({ attributes, id }) => {
                return (
                    <div
                        className="spirit-section"
                        id={attributes.Name.toLowerCase()}
                        key={attributes.Name.toLowerCase()}
                    >
                        <div className="wrapper">
                            <div className="spirit-type">
                                <h2 className="spirit-title">{attributes.Name}</h2>
                                <div className="drinks">
                                    {attributes.Drinks.data.map(({ attributes }) => {
                                        return (
                                            <div
                                                className="drink-indiv"
                                                key={attributes.Title.toLowerCase()}
                                            >
                                                <h3 className="drink-title">{attributes.Title}</h3>
                                                <p>{attributes.Description}</p>
                                                <Modal attributes={attributes} />
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
    const spiritsRes = await axios.get(`${process.env.STRAPI_API_URL}/spirits?${query}`);
    return {
        revalidate: 1,
        props: {
            spirits: spiritsRes.data,
        },
    };
}
