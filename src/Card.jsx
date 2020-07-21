import React from 'react';

const Card = ({name, email, id}) => {

  return (
    <div className="tc bg-green dib br3 shadow-5 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
      <h2>{name} </h2>
      <p>{email}m</p>
    </div>
  )
}

export default Card;
