import { h } from "preact";

const SquareButton = ({ text, onClick, isActive }) => {
  const classButton = `py-2 w-44 h-12 rounded-lg ${isActive ? "bg-atlantis-400" : "bg-atlantis-200"} hover:bg-atlantis-400`;

  return (
    <button type="button" className={classButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default SquareButton;
