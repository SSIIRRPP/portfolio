import { Modal } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import MainButton from "../Buttons/MainButton";
import LanguageConsumer from "../Language/LanguageConsumer";
import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";
import "./styles/ImageCard.scss";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const baseLangPath = "Components.Visual.ImageCard";

const ImageCard = ({
  className,
  src,
  alt,
  text,
  styles: { image = {}, p = {}, container = {} } = {},
  withModal = false,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const imageComponent = useMemo(
    () => (
      <img
        src={src}
        alt={alt}
        style={image}
        onClick={withModal ? () => setOpenModal(true) : undefined}
      />
    ),
    []
  );

  const closeModal = useCallback(() => setOpenModal(false), []);

  return (
    <>
      <div
        className={`ImageCard${className ? ` ${className}` : ""}${
          withModal ? " with-modal" : ""
        }`}
        style={container}
      >
        {imageComponent}
        <p style={p}>{text}</p>
      </div>
      {withModal ? (
        <Modal
          classes={{ root: "ImageCard__modal--root" }}
          open={openModal}
          onClose={closeModal}
        >
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
        </Modal>
      ) : null}
    </>
  );
};

export default ImageCard;
