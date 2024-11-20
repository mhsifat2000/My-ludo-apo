import { useState } from "react";
import "../styles/App.css";
import classes from "../styles/Dice.module.css";

export default function Dice({ onRoll }) {
  const [face, setFace] = useState(1);

  const rollDice = () => {
    const randomFace = Math.floor(Math.random() * 6) + 1;
    setFace(randomFace);
    if (onRoll) onRoll(randomFace); // Notify parent about dice roll
  };

  return (
    <div className={classes.container}>
      <div className={classes.dice} onClick={rollDice}>
        <div className={`face face-${face}`}>
          {face === 1 && <div className={`${classes.dot} ${classes.center}`}></div>}
          {face === 2 && (
            <>
              <div className={`${classes.dot} ${classes.topLeft}`}></div>
              <div className={`${classes.dot} ${classes.bottomRight}`}></div>
            </>
          )}
          {face === 3 && (
            <>
              <div className={`${classes.dot} ${classes.topLeft}`}></div>
              <div className={`${classes.dot} ${classes.center}`}></div>
              <div className={`${classes.dot} ${classes.bottomRight}`}></div>
            </>
          )}
          {face === 4 && (
            <>
              <div className={`${classes.dot} ${classes.topLeft}`}></div>
              <div className={`${classes.dot} ${classes.topRight}`}></div>
              <div className={`${classes.dot} ${classes.bottomLeft}`}></div>
              <div className={`${classes.dot} ${classes.bottomRight}`}></div>
            </>
          )}
          {face === 5 && (
            <>
              <div className={`${classes.dot} ${classes.topLeft}`}></div>
              <div className={`${classes.dot} ${classes.topRight}`}></div>
              <div className={`${classes.dot} ${classes.center}`}></div>
              <div className={`${classes.dot} ${classes.bottomLeft}`}></div>
              <div className={`${classes.dot} ${classes.bottomRight}`}></div>
            </>
          )}
          {face === 6 && (
            <>
              <div className={`${classes.dot} ${classes.topLeft}`}></div>
              <div className={`${classes.dot} ${classes.topRight}`}></div>
              <div className={`${classes.dot} ${classes.centerRight}`}></div>
              <div className={`${classes.dot} ${classes.centerLeft}`}></div>
              <div className={`${classes.dot} ${classes.bottomLeft}`}></div>
              <div className={`${classes.dot} ${classes.bottomRight}`}></div>
            </>
          )}
        </div>
      </div>
      <button className={classes.rollBtn} onClick={rollDice}>
        Roll Dice
      </button>
    </div>
  );
}