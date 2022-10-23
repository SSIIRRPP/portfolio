import { Suspense, useCallback, useMemo } from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import LanguageConsumer from "../Language/LanguageConsumer";
import "./styles/ImageCard.scss";
import Fallback from "../Fallback";
import { lazy } from "react";

const ImageModal = lazy(() => import("./ImageModal"));

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
        {typeof text === "string" ? <p style={p}>{text}</p> : null}
        {typeof text === "object" ? (
          <LanguageConsumer element="p" text={text} style={p} />
        ) : null}
      </div>
      {withModal && openModal ? (
        <Modal
          classes={{ root: "ImageCard__modal--root" }}
          open={openModal}
          onClose={closeModal}
        >
          <Suspense fallback={<Fallback />}>
            <ImageModal
              openModal={openModal}
              closeModal={closeModal}
              imageComponent={imageComponent}
            />
          </Suspense>
        </Modal>
      ) : null}
    </>
  );
};

export default ImageCard;
