import React from "react";

const Card = ({ value }) => {
  return (
    <div className="Card">
      <h3>{value < 0 ? "Ausgabe" : "Einnahme"}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
