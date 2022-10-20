import { Link } from "react-router-dom";
import ExternalLink from "../../../components/Visual/ExternalLink";
import {
  react,
  nextjs,
  nodejs,
  awsS3,
  awsCloudfront,
  sass,
} from "../../technologies";

const ordNServeLanding = {
  title: "OrdNServe Landing Page",
  id: "ordnserve-landing",
  short: {
    en: [
      <span className="info-span">Part of the OrdNServe project.</span>,
      "Landing page for the entire OrdNServe product.",
    ],
    spa: [
      <span className="info-span">Parte del proyecto OrdNServe.</span>,
      "Landing page para todo el producto OrdNServe.",
    ],
  },
  details: {
    spa: [
      <div>
        <h4 className="center">Propósito</h4>
        <p>Landing page para todo el producto OrdNServe.</p>
        <p>
          Fué creada para presentar el producto OrdNServe, pese a que se
          encuentra en fase de testeo, puesto que así podía empezar a tener
          cierta presencia online.
        </p>
        <p>
          Está construida sobre{" "}
          <ExternalLink href="https://nextjs.org/">NextJS</ExternalLink>, para
          obtener una mejor puntuación SEO que con Create React App.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Cuenta con componentes componentes como{" "}
          <Link to="/code-samples/AdjustableParallaxBanner">
            AdjustableParallaxBanner
          </Link>{" "}
          o <Link to="/code-samples/MouseParallax">MouseParallax</Link>, that
          allow components to be declared declaratively, and that give the user
          a more dynamic experience by providing backgrounds that change size
          and position as the user navigates through the page.
        </p>
        <p>Cuenta con temas claro y oscuro</p>
      </div>,
      <div>
        <h4 className="center">Gestión del estado</h4>
        <p>
          Dado a la simplicidad de la página, ésta almacena su estado en
          contextos separados para el tema, y ciertos estados relacionados con
          el layout, como las dimensiones de la página, o si el usuario navega
          desde un dispositivo móvil o desde escritorio.
        </p>
      </div>,
    ],
    en: [
      <div>
        <h4 className="center">Purpose</h4>
        <p>Landing page for the entire OrdNServe product.</p>
        <p>
          It was created to present the OrdNServe product, although it is still
          in the testing phase, so it could start to have a certain online
          presence.
        </p>
        <p>
          It's built on top of{" "}
          <ExternalLink href="https://nextjs.org/">NextJS</ExternalLink>, so it
          has a better SEO score than with Create React App.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          It has components such as{" "}
          <Link to="/code-samples/AdjustableParallaxBanner">
            AdjustableParallaxBanner
          </Link>{" "}
          or <Link to="/code-samples/MouseParallax">MouseParallax</Link>, that
          give the user a more dynamic experience, providing backgrounds that
          change size and position as the user navigates through the page.
        </p>
        <p>It has light and dark themes.</p>
      </div>,
      <div>
        <h4 className="center">State management</h4>
        <p>
          Due to the simplicity of the page, it stores its state in separate
          contexts for theme, and certain layout-related states, such as page
          dimensions, or whether the user is navigating from a mobile device or
          desktop.
        </p>
      </div>,
    ],
  },
  link: "https://www.ordnserve.com",
  github: {
    private: false,
    link: "https://github.com/SSIIRRPP/ordnserve-landing",
  },
  stack: {
    front: [react, nextjs, sass],
    back: [nodejs, awsS3, awsCloudfront],
  },
  time: {
    from: new Date(1624406400000),
  },
  type: "Landing Page",
  mobileFirst: false,
};

export default ordNServeLanding;
