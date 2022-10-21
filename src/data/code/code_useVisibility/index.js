// eslint-disable-next-line import/no-webpack-loader-syntax
import full_file from "!!raw-loader!./files/full_file.js";
import mesaAtencion1 from "./files/images/server-mesa-atencion-1.png";
import mesaAtencion2 from "./files/images/server-mesa-atencion-2.png";
import { Link } from "react-router-dom";
import ImageCard from "../../../components/Visual/ImageCard";
import "./style.scss";
import ArrowIcon from "../../../components/Visual/ArrowIcon";
import LanguageConsumer from "../../../components/Language/LanguageConsumer";

const imagesStyle = {
  maxWidth: "300px",
};

const imageContainerStyle = {
  maxWidth: "300px",
  display: "inline-block",
};

const imageCardStyles = {
  image: imagesStyle,
  container: imageContainerStyle,
};

const serverAtencion = (
  <div className="code_useVisibility__server-atencion">
    <div className="code_useVisibility__server-atencion__container">
      <ImageCard
        styles={imageCardStyles}
        className="code_useVisibility__server-atencion-1"
        src={mesaAtencion1}
        withModal
        alt="mesa-atencion-1"
        text={
          <LanguageConsumer
            noElement
            text={{
              spa: "Una de las mesas requiere atención por parte del camarero",
              en: "One of the tables needs attention from the waiter",
            }}
          />
        }
      />
    </div>
    <div className="code_useVisibility__server-atencion__icon">
      <ArrowIcon width={50} height={50} />
    </div>
    <div className="code_useVisibility__server-atencion__container">
      <ImageCard
        styles={imageCardStyles}
        className="code_useVisibility__server-atencion-2"
        src={mesaAtencion2}
        withModal
        alt="mesa-atencion-2"
        text={
          <LanguageConsumer
            noElement
            text={{
              spa: "Si la mesa no está dentro del viewport, un icono se lo indica al camarero",
              en: "If the table is not within the viewport, an icon indicates this to the waiter.",
            }}
          />
        }
      />
    </div>
  </div>
);

const code_useVisibility = {
  title: "useVisibility",
  id: "useVisibility",
  short: {
    en: [
      <div>
        <p>
          Hook developed to control the visibility of the component in which it
          is executed within the layout.
        </p>
      </div>,
    ],
    spa: [
      <div>
        <p>
          Hook desarrollado para controlar la visibilidad del componente en el
          que se ejecuta dentro del layout.
        </p>
      </div>,
    ],
  },
  text_file: full_file,
  type: "React Hook",
  details: {
    en: [
      <div>
        <p>
          I developed this hook for the{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>{" "}
          application, to control whether or not the tables were visible to the
          waiter in the main view.
        </p>
        <p>
          The main motivation for making this hook was to make it visible to the
          waiter that one of the tables requires attention when it is not within
          the visible area of the viewport:
        </p>
        {serverAtencion}
      </div>,
    ],
    spa: [
      <div>
        <p>
          Desarrollé este hook para la aplicación{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>, para
          controlar si las mesas eran visibles o no para el camarero en la vista
          principal.
        </p>
        <p>
          La principal motivación para hacer este hook, fué hacer visible para
          el camarero que una de las mesas requiere atención cuando no está
          dentro del area visible del viewport:
        </p>
        {serverAtencion}
      </div>,
    ],
  },
};

export default code_useVisibility;
