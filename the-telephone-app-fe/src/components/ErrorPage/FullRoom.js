import imgFullRoom from "../../assets/fullroom.png";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const FullRoom = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div class="page-not-found">
      <img src={imgFullRoom} alt="" />
      <div>
        <button onClick={handleBack}>
          <BsFillCaretLeftFill className="icon" />
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default FullRoom;
