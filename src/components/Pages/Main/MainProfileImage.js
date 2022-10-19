import { useContext } from "react";
import { LanguageContext } from "../../../contexts/Language";
import profileImage from "../../../assets/images/profile2.jpg";
import "./styles/MainProfileImage.scss";

const MainProfileImage = ({ info, animationRef }) => {
  const {
    text: {
      Pages: {
        Main: {
          Body: {
            MainProfileImage: { imageAlt },
          },
        },
      },
    },
  } = useContext(LanguageContext);
  return (
    <div className="MainProfileImage" ref={animationRef}>
      <div className="MainProfileImage__container">
        <img src={profileImage} alt={imageAlt} />
        <p>{info.name}</p>
      </div>
    </div>
  );
};

export default MainProfileImage;
