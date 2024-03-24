import React, { useState } from "react";

function Card({ cell, cells, id, setCells, firstStep, setFirstStep, winner }) {
  const handleGame = (event) => {
    let taken =
      event.target.firstChild?.classList.contains("circle") ||
      event.target.firstChild?.classList.contains("cross");
      console.log(taken);
    if (!taken && taken !==undefined) {
      if (firstStep === "circle") {
        event.target.firstChild?.classList.add("circle");
        setFirstStep("cross");
        handleCellChange('circle');
      } else {
        event.target.firstChild?.classList.add("cross");
        setFirstStep("circle");
        handleCellChange('cross');
      }
    }
  };

  const handleCellChange = (classList) => {
    let updateArrayCell = cells.map((el, index) => {
      if(index === id) {
        return classList; 
      } else {
        return el;
      }
    });
    setCells(updateArrayCell);
  };

  return (
    <div className="square" id={id} onClick={ !winner ? handleGame : null}>
      <div className={cell}></div>
    </div>
  );
}

export default Card;
