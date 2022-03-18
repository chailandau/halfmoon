
import { DrinkList } from "../DrinkInfo/DrinkList";

const Drinks = () => {
  console.log( DrinkList );
  return (
    <>
      {DrinkList.map( ( { spiritType, drinks } ) => {
        return (
          <div className="spirit-section" key={spiritType.toLowerCase()}>
            <div className="wrapper">
              <div className="spirit-type">
                <h2 className="spirit-title">{spiritType}</h2>
                <div className="drinks">
                  {drinks.map( ( { name, desc, recipe } ) => {
                    return ( 
                      <div className="drink-indiv" key={name.toLowerCase()}>
                        <h3>{name}</h3>
                        <p>{desc}</p>
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
