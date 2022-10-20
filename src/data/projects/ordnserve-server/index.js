import { Link } from "react-router-dom";
import ExternalLink from "../../../components/Visual/ExternalLink";
import {
  react,
  mongodb,
  redux,
  nodejs,
  expressjs,
  xstate,
  awsAPIGateway,
  awsS3,
  awsDynamoDb,
  awsLambda,
  awsEC2,
  awsCloudfront,
  sass,
} from "../../technologies";

const ordNServeServer = {
  title: "OrdNServe Server", //
  id: "ordnserve-server", //
  short: {
    en: [
      <span className="info-span">Part of the OrdNServe project.</span>,
      "This application was designed for waiters to manage restaurant orders.",
    ],
    spa: [
      <span className="info-span">Parte del proyecto OrdNServe.</span>,
      "Esta aplicación está diseñada para que los camareros gestionen los pedidos del restaurante.",
    ],
  }, //
  details: {
    spa: [
      <div>
        <h4 className="center">Propósito</h4>
        <p>
          Esta aplicación está diseñada para que los camareros gestionen los
          pedidos del restaurante.
        </p>
        <p>
          Permite a los camareros gestionar los códigos QR de las mesas, (a
          través de los cuales los clientes pueden realizar sus pedidos),
          aceptar pedidos, cancelarlos, así como confirmar la entrega de los
          productos a los clientes.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Incorpora un{" "}
          <Link to="/code-samples/QrScan">lector de códigos QR</Link> para
          agilizar y facilitar al camarero cambiar la asignación del código a
          cada mesa.
        </p>
        <p>
          Para esta aplicación, desarrollé también los hooks{" "}
          <Link to="/code-samples/useAnimation">useAnimation</Link> y{" "}
          <Link to="/code-samples/useVisibility">useVisibility</Link>, para
          ofrecer un mejor feedback a los camareros sobre los pedidos que debían
          ser atendidos lo antes posible, como se explica en sus respectivas
          páginas.
        </p>
        <p>Cuenta con temas claro y oscuro.</p>
      </div>,
      <div>
        <h4 className="center">Gestión del estado</h4>
        <p>
          Al igual que{" "}
          <Link to="/projects/ordnserve-store">OrdNServe Store</Link>, almacena
          su estado con Redux, gestionando las llamadas a APIs y los
          side-effects con{" "}
          <ExternalLink href="https://redux-saga.js.org/">
            Redux-Saga
          </ExternalLink>
          .
        </p>
      </div>,
      <div>
        <h4 className="center">Autenticación</h4>
        <p>
          Está provista de inicio de sesión con correo electrónico y contraseña,
          provisto por{" "}
          <ExternalLink href="https://aws.amazon.com/es/cognito/">
            Amazon Cógnito
          </ExternalLink>
          .
        </p>
      </div>,
      <div>
        <h4 className="center">Seguridad</h4>
        <p>
          Ofrece un sistema de permisos administrados por el dueño del
          restaurante, y según los permisos que posea el usuario (almacenados en
          el id_token utilizado para la autenticación), las diferentes secciones
          son mostradas u ocultadas gracias a los{" "}
          <Link to="/code-samples/user-security">permisos de usuario</Link>.
        </p>
      </div>,
      <p>
        Como el resto de las aplicaciones del proyecto, para la gestión de los
        pedidos se comunica con el backend a través de{" "}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">
          WebSockets
        </ExternalLink>
        , ofreciendo así a los camareros una experiencia dinámica y en tiempo
        real.
      </p>,
    ],
    en: [
      <div>
        <h4 className="center">Purpose</h4>
        <p>
          This application was designed for waiters to manage restaurant orders.
        </p>
        <p>
          It allows waiters to manage QR codes on the tables, (through which
          customers can place their orders), accept orders, cancel them, as well
          as confirm the delivery of products to customers.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Incorporates a <Link to="/code-samples/QrScan">QR code reader</Link>{" "}
          to make it quicker and easier for the waiter to change the code
          assignment to each table.
        </p>
        <p>
          For this application, I also developed the{" "}
          <Link to="/code-samples/useAnimation">useAnimation</Link> and{" "}
          <Link to="/code-samples/useVisibility">useVisibility</Link> hooks, to
          provide better feedback to the waiters on orders that needed to be
          fulfilled as soon as possible, as explained in their respective pages.
        </p>
        <p>It has light and dark themes.</p>
      </div>,
      <div>
        <h4 className="center">State management</h4>
        <p>
          As well as <Link to="/projects/ordnserve-store">OrdNServe Store</Link>
          , it stores its state with Redux, handling API calls and side-effects
          with{" "}
          <ExternalLink href="https://redux-saga.js.org/">
            Redux-Saga
          </ExternalLink>
          .
        </p>
      </div>,
      <div>
        <h4 className="center">Authentication</h4>
        <p>
          It is provided with a login with e-mail and password, provided by{" "}
          <ExternalLink href="https://aws.amazon.com/es/cognito/">
            Amazon Cógnito
          </ExternalLink>
        </p>
      </div>,
      <div>
        <h4 className="center">Security</h4>
        <p>
          It offers a system of permissions managed by the restaurant owner, and
          depending on the permissions held by the user (stored in the id_token
          used for authentication), the different sections are shown or hidden
          thanks to the{" "}
          <Link to="/code-samples/user-security">user permissions</Link>.
        </p>
      </div>,
      <p>
        Like the rest of the project's applications, for order management it
        communicates with the backend via{" "}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">
          WebSockets
        </ExternalLink>
        , offering this way waiters a dynamic and real-time experience.
      </p>,
    ],
  },
  link: "https://server.ordnserve.com",
  github: {
    private: true,
    link: null,
  },
  stack: {
    front: [react, redux, sass],
    back: [
      nodejs,
      expressjs,
      mongodb,
      xstate,
      awsAPIGateway,
      awsS3,
      awsEC2,
      awsDynamoDb,
      awsCloudfront,
      awsLambda,
    ],
  },
  time: {
    from: new Date(1629590400000),
  },
  type: "Web App",
  mobileFirst: true,
};

export default ordNServeServer;
