import { DrinkList } from "../DrinkInfo/DrinkList";
import dynamic from "next/dynamic";

// ssr false so it only renders client side
const Modal = dynamic( () => import( "../DrinkInfo/Modal" ), { ssr: false } );

const Drinks = () => {
  console.log( DrinkList );

  return (
    <>
      {DrinkList.map( ( { spiritType, drinks } ) => {
        return (
          <div className="spirit-section" id={spiritType.toLowerCase()} key={spiritType.toLowerCase()}>
            <div className="wrapper">
              <div className="spirit-type">
                <h2 className="spirit-title">{spiritType}</h2>
                <div className="drinks">
                  {drinks.map( ( { name, desc, recipe } ) => {
                    return ( 
                      <div className="drink-indiv" key={name.toLowerCase()}>
                        <h3 className="drink-title">{name}</h3>
                        <p>{desc}</p>
                        <Modal />
                      
                        <ul>
                          {recipe.map( ( item, i )=> {
                            return <li key={i}>{item}</li>;
                          } )}
                        </ul>
                      </div>
                    );
                  } )}
                </div>
              </div>
            </div>
          </div>
        );
      } )}
    </>
    
  );
};

export default Drinks;
