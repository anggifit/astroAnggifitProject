import { h } from "preact";
import { useState } from "preact/hooks";
import SquareButton from "../SquareButton";

const ManagerPricesButton = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <div className="mx-4">
      <SquareButton text={text} onClick={handleClick} isActive={isActive} />
    </div>
  );
};

export default ManagerPricesButton;
