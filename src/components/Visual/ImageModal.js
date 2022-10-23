import MainButton from "../Buttons/MainButton";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import LanguageConsumer from "../Language/LanguageConsumer";

const baseLangPath = "Components.Visual.ImageCard";

const ImageModal = ({ openModal, closeModal, imageComponent }) => {
  return (
    <div className="ImageCard__modal fade-in-comp">
      <div className="ImageCard__modal--header">
        <MainButton onClick={closeModal} type="dark">
          <CloseIcon />
        </MainButton>
      </div>
      <div className="ImageCard__modal--body">
        <LanguageConsumer
          className="ImageCard__modal--zoomFeedback"
          element="span"
          onClick={closeModal}
          basePath={baseLangPath}
          path="Modal.feedback"
        />
        <TransformWrapper centerOnInit>
          <TransformComponent wrapperClass="ImageCard__modal--zoomWrapper">
            {imageComponent}
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className="ImageCard__modal--footer">
        <LanguageConsumer
          element={MainButton}
          onClick={closeModal}
          basePath={baseLangPath}
          path="Modal.closeButton"
        />
      </div>
    </div>
  );
};

export default ImageModal;
