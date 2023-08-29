import Person from "./Person";
//search bart nem találta
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PersonCard = () => {
  const { path } = useParams();
  const [url, setUrl] = useState(
    "https://hp-api.onrender.com/api/characters/" + path
  );
  const { data } = useFetch(url);

  console.log(data);

  return (
    <div>
      <div>personcard</div>
      <div>
        <Person />
      </div>
    </div>
  );
};

export default PersonCard;
