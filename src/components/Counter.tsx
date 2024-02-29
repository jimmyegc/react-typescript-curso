import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClickButton = (numero: number = 1): void => {
    setCounter(counter + numero);
  };
  //;

  return (
    <>
      <h3>Counter: useState</h3>
      <span>Valor: {counter}</span>
      <button onClick={() => handleClickButton()}>++</button>
      <button onClick={() => handleClickButton(2)}>+2</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </>
  );
};
