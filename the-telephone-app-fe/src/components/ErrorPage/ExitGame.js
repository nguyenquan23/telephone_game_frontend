import imgExitGame from "../../assets/exitgame.png";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ExitGame = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div class="page-not-found">
      <img src={imgExitGame} alt="" />
      <div>
        <button onClick={handleBack}>
          <BsFillCaretLeftFill className="icon" />
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default ExitGame;
