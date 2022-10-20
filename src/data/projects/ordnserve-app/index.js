import { Link } from "react-router-dom";
import ExternalLink from "../../../components/Visual/ExternalLink";
import {
  react,
  mongodb,
  nodejs,
  xstate,
  awsAPIGateway,
  awsDynamoDb,
  awsS3,
  awsEC2,
  awsLambda,
  awsCloudfront,
  sass,
} from "../../technologies";
// eslint-disable-next-line import/no-webpack-loader-syntax
/* import pruebaJs from "!!raw-loader!./files/test.js"; */
/* import CodeShower from "../../../components/CodeShower"; */

const ordNServeApp = {
  title: "OrdNServe App",
  id: "ordnserve-app",
  short: {
    en: [
      <span className="info-span">Part of the OrdNServe project.</span>,
      "This application was designed to allow restaurant customers to order directly from their table without the intervention of the waiter.",
    ],
    spa: [
      <span className="info-span">Parte del proyecto OrdNServe.</span>,
      "Esta aplicación está diseñada para que los clientes de un restaurante puedan pedir directamente desde su mesa sin intervención del camarero.",
    ],
  },
  details: {
    spa: [
      <div>
        <h4 className="center">Propósito</h4>
        <p>
          Esta aplicación web está diseñada para que los clientes de un
          restaurante puedan pedir directamente desde su mesa sin intervención
          del camarero.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Cuenta con una{" "}
          <Link to="/code-samples/NotificationsMachine">
            barra superior de notificaciones
          </Link>
          , que guía al usuario a través del proceso de pedido, haciéndolo más
          intuitivo para los usuarios menos experimentados.
        </p>
        <p>Cuenta con temas claro y oscuro.</p>
      </div>,
      <div>
        <h4 className="center">Gestión del estado</h4>
        <p>
          La aplicación guarda su estado local en React Context separados para
          la carga de datos, el inicio de sesión del usuario, la gestión del
          pedido, y las notificaciones que guían al usuario a través del proceso
          .
          <br />
          <br /> El proceso de pedido se realiza a través de una state machine
          creada con{" "}
          <ExternalLink href="https://xstate.js.org/">XState</ExternalLink>
          .
          <br />
          <br />
          Ésta carga su estado desde el servidor cuando el usuario recarga la
          página, para no tener que guardar cada estado del pedido localmente
          por cada restaurante diferente, y que así este se mantenga
          sincronizado con el estado del pedido en el servidor
          <br />
          <br />
          Ésta se comunica con el backend a través de{" "}
          <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">
            WebSockets
          </ExternalLink>
          , para ofrecer al usuario una experiencia dinámica y en tiempo real.
          El estado del WebSocket es también gestionado a través de una state
          machine.
          <br />
          La comunicación entre ambas state machines es controlado por una
          tercera state machine que crea una cola de mensajes y gestiona sus
          respuestas.
        </p>
      </div>,
      <div>
        <h4 className="center">Autenticación</h4>
        <p>
          Está provista de inicio de sesión con Google y Facebook, así como
          inicio de sesión con correo electrónico y contraseña, provisto por{" "}
          <ExternalLink href="https://aws.amazon.com/es/cognito/">
            Amazon Cógnito
          </ExternalLink>
          .
        </p>
      </div>,
    ],
    en: [
      <div>
        <h4 className="center">Purpose</h4>
        <p>
          This web application is designed so that customers of a restaurant can
          order directly from their table without the intervention of the waiter
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          It has a{" "}
          <Link to="/code-samples/NotificationsMachine">
            top notification bar
          </Link>
          , that guides the user through the ordering process, making it more
          intuitive for less experienced users.
        </p>
        <p>It has light and dark themes.</p>
      </div>,
      <div>
        <h4 className="center">State management</h4>
        <p>
          The application saves its local state in separate React Context for
          data loading, user login, order management, and the notifications
          guiding the user through the process .
          <br />
          <br /> The ordering process is carried out through a state machine
          created with{" "}
          <ExternalLink href="https://xstate.js.org/">XState</ExternalLink>
          .
          <br />
          <br />
          It loads its status from the server when the user reloads the page, so
          it doesn't have to save each order status locally for each restaurant,
          so that it stays in sync with the order status on the server.
          <br />
          <br />
          It communicates with the backend via{" "}
          <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">
            WebSockets
          </ExternalLink>
          , to offer the user a dynamic and real-time experience. The WebSocket
          state is also managed through a state machine.
          <br />
          Communication between the two state machines is controlled by a third
          state machine that creates a message queue and manages its responses.
        </p>
      </div>,
      <div>
        <h4 className="center">Authentication</h4>
        <p>
          It is provided with Google and Facebook login, as well as login with
          email and password, provided by{" "}
          <ExternalLink href="https://aws.amazon.com/es/cognito/">
            Amazon Cognito
          </ExternalLink>
          .
        </p>
      </div>,
    ],
  },
  link: "https://app.ordnserve.com",
  github: {
    private: true,
    link: null,
  },
  stack: {
    front: [react, xstate, sass],
    back: [
      nodejs,
      mongodb,
      awsAPIGateway,
      awsDynamoDb,
      awsCloudfront,
      awsS3,
      awsEC2,
      awsLambda,
    ],
  },
  time: {
    from: new Date(1614729600000),
  },
  type: "Web App",
  mobileFirst: true,
};

export default ordNServeApp;
