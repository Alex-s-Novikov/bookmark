import React from "react";

function Qualitie({ color, name, _id }) {
  return (
    <span key={_id} className={`badge m-1 bg-${color}`}>
      {name}
    </span>
  );
}

export default Qualitie;