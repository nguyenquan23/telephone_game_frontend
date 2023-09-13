import imgCancelRoom from "../../assets/cancelroom.png";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CancelRoom = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div class="page-not-found">
      <img src={imgCancelRoom} alt="" />
      <div>
        <button onClick={handleBack}>
          <BsFillCaretLeftFill className="icon" />
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default CancelRoom;
