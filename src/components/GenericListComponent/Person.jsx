import { useState } from "react";

const Person = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div>
        <div>
          <img src={props.image} alt="pic" />
          <h2>{props.name}</h2>
        </div>
        <div>
          {props.house}
          {props.dateOfBirth}
          {props.patronus}

          {props.actor}
        </div>
      </div>
    </div>
  );
};

export default Person;
