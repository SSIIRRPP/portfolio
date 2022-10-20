import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../contexts/Language";
import profileImage from "../../../assets/images/profile2.jpg";
import "./styles/MainProfileImage.scss";

const MainProfileImage = ({ info, animationRef }) => {
  const { extractTextWithPath } = useContext(LanguageContext);

  const imageAlt = useMemo(
    () => extractTextWithPath("Pages.Main.Body.MainProfileImage.imageAlt"),
    [extractTextWithPath]
  );

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
