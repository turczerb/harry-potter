const Person = (props) => {
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
          {props.wand.wood}
          {props.wand.core}
          {props.actor}
        </div>
      </div>
    </div>
  );
};

export default Person;
