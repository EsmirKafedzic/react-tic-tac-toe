import { useEffect, useState } from 'react';
import Cell from './components/Cell';

function App() {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [firstStep, setFirstStep] = useState('circle');
  const [winner, setWinner] = useState(null);


  useEffect(() => {
    checkWinner();
  }, [cells]);

let checkArray = cells.every(cell => cell !== '');

  const checkWinner = () => {
    const combos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    combos.forEach((combo) => {
      let crossWinner = combo.every(cell => cells[cell] === 'cross');
      let circleWinner = combo.every(cell => cells[cell] === 'circle');

      if(crossWinner) {
        setWinner('Winner is cross');
        return;
      } else if(circleWinner) {
        setWinner('Winner is circle');
        return;
      } else if(checkArray){
        setWinner('We dont have a winner');
      }
    })

  }

  const resetGame = () => {
    if(winner || checkArray) {
      let emptyArray = new Array(9).fill("");
      setCells(emptyArray);
      setWinner(null);
    }
  }
 
  return (
    <div className='app'>
      <h1 className="title">X 0 app</h1>
      <div className="squareContainer">
        {cells.map((cell, index) => {
          return <Cell 
          key={index} 
          cell={cell} 
          cells={cells} 
          setCells={setCells}
          id={index} 
          firstStep={firstStep}
          setFirstStep={setFirstStep}
          winner={winner}
          />;
        })}
      </div>

        <button className='button' onClick={resetGame}>Reset game</button>

      {winner && <h2>{winner}</h2>} 
    </div>
  );
}


export default App
