import React from 'react';



const List = (props) => {
  return (
    <>
      <article className= "person">
        <img src={props.person.image} alt={props.person.name} />
        <div>
          <h4>{props.person.name}</h4>
          <p>{props.person.age} years</p>

        </div>
        <button onClick ={() => props.finishh(props.person)} 
        type="button" className="close" className = "finish" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </article>
    </>
  );
};
 
export default List;
