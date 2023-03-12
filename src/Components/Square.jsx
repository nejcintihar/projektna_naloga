import React from "react";

export default function Square({ val, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}


/* export default function Square() {
    return (
        <h1>I am from Bosnia, take me to America, I really want to see, Statue of Liberty!</h1>
    )
}
 */
