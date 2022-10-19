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
} from "../../technologies";

const ordNServeStore = {
  title: "OrdNServe Store", //
  id: "ordnserve-store", //
  short: {
    en: [
      <span className="info-span">Part of the OrdNServe project.</span>,
      "This application was designed to manage restaurants, as well as almost all the options of the waiter application.",
    ],
    spa: [
      <span className="info-span">Parte del proyecto OrdNServe.</span>,
      "Esta aplicación está diseñada para gestionar los restaurantes, así como casi todas las opciones de la aplicación para camareros.",
    ],
  }, //
  details: {
    spa: [
      <div>
        <h4 className="center">Propósito</h4>
        <p>
          Esta aplicación está diseñada para gestionar los restaurantes, así
          como casi todas las opciones de la aplicación para camareros.
        </p>
        <p>
          Es la aplicación más compleja del proyecto OrdNServe, integrando todas
          las funciones de{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>,
          incluyendo además la administración de los productos, la
          administración de las cuentas de camareros y sus permisos, la creación
          y descarga de nuevos códigos QR, y la administración de las{" "}
          <Link to="/code-samples/TableEditor">mesas del restaurante</Link>.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Con el{" "}
          <Link to="/code-samples/ProductEditor">editor de productos</Link>, los
          usuarios autorizados pueden modificar los productos mientras
          visualizan cómo serán visualizados en la{" "}
          <Link to="/projects/ordnserve-app">OrdNServe App</Link> por los
          usuarios, tanto en la lista de productos como en la página de cada
          producto.
        </p>
        <p>
          También incluye una barra superior de servicio, para que la
          información de los pedidos siempre esté disponible, aunque el usuario
          no esté en la pagina de "/service", donde se administran los pedidos
          en tiempo real.
        </p>
        <p>Cuenta con temas claro y oscuro.</p>
      </div>,
      <div>
        <h4 className="center">Gestión del estado</h4>
        <p>
          Al igual que{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>,
          almacena su estado con Redux, gestionando las llamadas a APIs y los
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
          This application was designed to manage restaurants, as well as almost
          all the options of the waiter application.
        </p>
        <p>
          It is the most complex application of the OrdNServe project,
          integrating all of the functions of{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>,
          including product management, management of waiter accounts and
          permissions, creation and downloading of new QR codes, and management
          of the <Link to="/code-samples/TableEditor">restaurant tables</Link>.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          With the <Link to="/code-samples/ProductEditor">product editor</Link>,
          authorized users can modify the products while viewing how they will
          be displayed in the{" "}
          <Link to="/projects/ordnserve-app">OrdNServe App</Link> for the users,
          both in the product list and on each product page.
        </p>
        <p>
          It also includes a service top bar, so that orders information is
          always available, even if the user is not on the "/service" page,
          where orders are managed in real time.
        </p>
        <p>It has light and dark themes.</p>
      </div>,
      <div>
        <h4 className="center">State management</h4>
        <p>
          As well as{" "}
          <Link to="/projects/ordnserve-server">OrdNServe Server</Link>, it
          stores its state with Redux, handling API calls and side-effects with{" "}
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
  link: "https://store.ordnserve.com",
  github: {
    private: true,
    link: null,
  },
  stack: {
    front: [react, redux],
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
    from: new Date(1618704000000),
  },
  type: "Web App",
  mobileFirst: false,
};

export default ordNServeStore;
