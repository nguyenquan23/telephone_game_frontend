import { useEffect, useState } from "react";
import ava1 from "../assets/avatar/ava1.png";
import ava2 from "../assets/avatar/ava2.png";
import ava3 from "../assets/avatar/ava3.png";
import ava4 from "../assets/avatar/ava4.png";
import ava5 from "../assets/avatar/ava5.png";
import ava6 from "../assets/avatar/ava6.png";
import ava7 from "../assets/avatar/ava7.png";
import ava8 from "../assets/avatar/ava8.png";
import ava9 from "../assets/avatar/ava9.png";
import ava10 from "../assets/avatar/ava10.png";
import { BiRotateRight } from "react-icons/bi";

const Avatar = ({
  onAvatarChange,
  displayAvatar,
  showAvatarId,
  resultAvatar,
}) => {
  const avatars = [
    { id: 0, src: ava1 },
    { id: 1, src: ava2 },
    { id: 2, src: ava3 },
    { id: 3, src: ava4 },
    { id: 4, src: ava5 },
    { id: 5, src: ava6 },
    { id: 6, src: ava7 },
    { id: 7, src: ava8 },
    { id: 8, src: ava9 },
    { id: 9, src: ava10 },
  ];

  const [avatarId, setAvatarId] = useState(Math.floor(Math.random() * 10));
  const changeAvatar = () => {
    const newId = Math.floor(Math.random() * 10);
    setAvatarId(newId);
    onAvatarChange(newId);
  };

  const [inputAvatarId, setInputAvatarId] = useState(0);

  useEffect(() => {
    if (!displayAvatar) {
      onAvatarChange(avatarId);
    }
  }, [avatarId]);

  useEffect(() => {
    setInputAvatarId(showAvatarId);
  }, [showAvatarId]);

  return (
    <>
      {displayAvatar ? (
        <>
          <img
            src={
              avatars[inputAvatarId].src !== undefined
                ? avatars[inputAvatarId].src
                : ava1
            }
            className={resultAvatar ? "mess-avatar" : "img-ava"}
            alt=""
          />
        </>
      ) : (
        <>
          <div className="avatar-border center align position-relative">
            <img
              src={avatars[avatarId].src}
              className="img-big position-absolute top-50 start-50 translate-middle"
              alt=""
            />
            <button
              onClick={() => changeAvatar()}
              className="position-absolute change-avatar-button"
            >
              <BiRotateRight size={"1.4rem"} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Avatar;
