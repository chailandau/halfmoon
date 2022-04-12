import { useState, useEffect } from "react";
import IconClose from "../../svg/IconClose";

const Modal = (props) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    // add active-modal class if modal is open
    useEffect(() => {
        let html = document.querySelector("html");
        if (modal) {
            html.classList.add("active-modal");
        } else {
            html.classList.remove("active-modal");
        }
    }, [modal]);

    return (
        <div>
            <button className="btn-modal" onClick={toggleModal}>
                {props.Title} recipe
            </button>

            {
                // show modal if state is true
                modal && (
                    <div className="modal">
                        <div className="overlay" onClick={toggleModal}>
                            <div className="modal-content">
                                <h2 className="drink-title">{props.Title}</h2>
                                <ul>
                                    {props.Ingredients.map((recipe, id) => {
                                        return <li key={id}>{recipe.Ingredient}</li>;
                                    })}
                                </ul>

                                {
                                    // show instructions only if they exist
                                    props.Instructions.length != 0 && (
                                        <div className="instructions">
                                            <p>Instructions:</p>
                                            <ul>
                                                {props.Instructions.map((instructions, id) => {
                                                    return <li key={id}>{instructions.Step}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }
                                {
                                    // show optional only if it exists
                                    props.Optional.length != 0 && (
                                        <div className="optional">
                                            <p>Optional:</p>
                                            <ul>
                                                {props.Optional.map((options, id) => {
                                                    return <li key={id}>{options.Optional}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }

                                <button className="close-modal" onClick={toggleModal}>
                                    <IconClose />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Modal;
