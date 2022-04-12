import axios from "axios";
import { DrinkList } from "../components/DrinkInfo/DrinkList";
import dynamic from "next/dynamic";
import IconArrow from "../svg/IconArrow";
let Scroll = require("react-scroll");
let scroll = Scroll.animateScroll;

const Modal = dynamic(() => import("../components/DrinkInfo/Modal"), { ssr: false });

// populated query for strapi
const qs = require("qs");
const query = qs.stringify(
    {
        populate: ["Drink", "Drink.Ingredients", "Drink.Instructions", "Drink.Optional"],
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
    console.log(spiritType[2].attributes.Drink[0]);
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
                                    {attributes.Drink.map(
                                        ({
                                            Title,
                                            Description,
                                            Ingredients,
                                            Instructions,
                                            Optional,
                                        }) => {
                                            return (
                                                <div
                                                    className="drink-indiv"
                                                    key={Title.toLowerCase()}
                                                >
                                                    <h3 className="drink-title">{Title}</h3>
                                                    <p>{Description}</p>
                                                    <Modal
                                                        Title={Title}
                                                        Ingredients={Ingredients}
                                                        Instructions={Instructions}
                                                        Optional={Optional}
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
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
    const spiritsRes = await axios.get(`http://localhost:1337/api/spirits?${query}`);
    return {
        props: {
            spirits: spiritsRes.data,
        },
    };
}
