import { Link } from "react-router-dom";
import { createIdPath } from "../../../components/ParagraphGenerator/ParagraphGenerator";
import ExternalLink from "../../../components/Visual/ExternalLink";
import {
  mongodb,
  nodejs,
  awsAPIGateway,
  awsDynamoDb,
  awsS3,
  awsEC2,
  awsLambda,
  serverless,
  expressjs,
  xstate,
  awsCloudfront,
} from "../../technologies";

const ids = {
  dbMicroservices: "db-microservices",
  serviceArchitecture: "service-architecture",
  websocketMicroservices: "websocket-microservices",
  databases: "databases",
};

const ordNServeBackend = {
  title: "OrdNServe Backend", //
  id: "ordnserve-backend", //
  short: {
    en: [
      <span className="info-span">Part of the OrdNServe project.</span>,
      "Here the backend for the OrdNServe project is described.",
    ],
    spa: [
      <span className="info-span">Parte del proyecto OrdNServe.</span>,
      "Aquí se describe el backend del proyecto OrdNServe.",
    ],
  }, //
  details: {
    spa: [
      <div>
        <h4 className="center">
          El backend del proyecto OrdNServe se divide en varios microservicios
          para la gestión de datos en las bases de datos, y en un grupo de
          servidores dedicados para la gestión del servicio y los pedidos, de
          forma que sean independientes entre sí.
        </h4>
      </div>,
      <div id={ids.dbMicroservices}>
        <h4 className="center">Microservicios para las bases de datos</h4>
        <p>
          La interacción con las bases de datos se realiza a través de
          microservicios desplegados en diferentes instancias de{" "}
          <ExternalLink href="https://aws.amazon.com/es/api-gateway/">
            AWS API Gateway
          </ExternalLink>
          , cada una con su propia autenticación según el tipo de usuario{" "}
          <small>
            (ver{" "}
            <Link to="/code-samples/user-security">permisos de usuario</Link>)
          </small>
          , conectadas a diferentes funciones{" "}
          <ExternalLink href="https://aws.amazon.com/es/lambda/">
            AWS Lambda
          </ExternalLink>
          , que realizan las operaciones de escritura de datos en{" "}
          <ExternalLink href="https://aws.amazon.com/es/dynamodb/">
            DynamoDB
          </ExternalLink>
          .
        </p>
        <p>
          Tras la operación de escritura, la propia función Lambda notifica al{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            grupo de servidores que gestionan el servicio
          </Link>
          , y estos a su vez notifican a la instancia de API Gateway utilizada
          para realizar las comunicaciones a través de WebSockets, manteniendo
          así las aplicaciones de los usuarios actualizadas en tiempo real.
        </p>
      </div>,
      <div id={ids.serviceArchitecture}>
        <h4 className="center">
          Servicios para los pedidos y el servicio de restaurante
        </h4>
        <p>
          Consiste en un grupo de servidores{" "}
          <ExternalLink href="https://aws.amazon.com/es/ec2/">EC2</ExternalLink>{" "}
          tras un{" "}
          <ExternalLink href="https://aws.amazon.com/es/elasticloadbalancing/">
            balanceador de carga
          </ExternalLink>
          , dentro de su propia{" "}
          <ExternalLink href="https://aws.amazon.com/es/vpc/">VPC</ExternalLink>
          , que recibe las peticiones ruteadas por instancias de API Gateway{" "}
          <ExternalLink href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html">
            configuradas como proxy
          </ExternalLink>
          , las cuales se encargan de autorizar las peticiones.
        </p>
        <p>
          Estos servidores estan programados sobre{" "}
          <ExternalLink href="https://nodejs.org/">NodeJS</ExternalLink>,
          utilizando{" "}
          <ExternalLink href="https://expressjs.com/es/">
            ExpressJS
          </ExternalLink>{" "}
          para organizar las diferentes rutas, y{" "}
          <ExternalLink href="https://xstate.js.org/">XState</ExternalLink> para
          ejecutar los cambios sobre el pedido, garantizando así el correcto
          ciclo de vida del pedido. El estado de los pedidos se almacena en una
          instancia de{" "}
          <ExternalLink href="https://www.mongodb.com/atlas/database">
            MongoDB Atlas
          </ExternalLink>
          , para hacer estos datos independientes de los datos de los productos
          y de los restaurantes, que se almacenan en DynamoDB.
        </p>
      </div>,
      <div id={ids.websocketMicroservices}>
        <h4 className="center">Microservicios para los websockets</h4>
        <p>
          Las conexiones a través de WebSockets son{" "}
          <ExternalLink href="https://docs.aws.amazon.com/es_es/apigateway/latest/developerguide/apigateway-websocket-api.html">
            gestionados por API Gateway
          </ExternalLink>
          . Este autentica a los usuarios mediante una función Lambda, y rutea
          sus mensajes al balanceador de carga de los{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            servicios para los pedidos y el servicio de restaurante
          </Link>
          , los cuales procesan la petición, y acto seguido llaman a esta
          instancia de API Gateway para que envie la respuesta al usuario.
        </p>
      </div>,
      <div id={ids.databases}>
        <h4 className="center">Bases de datos</h4>
        <p>
          Los datos mas permanentes, relacionados con{" "}
          <Link to={createIdPath(ids.dbMicroservices)} replace>
            los productos y la información de cada restaurante
          </Link>{" "}
          son modificados a través de funciones Lambda y almacenados en
          DynamoDB.
        </p>
        <p>
          Los datos relacionados con{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            los pedidos y el servicio de los restaurantes
          </Link>
          , así como la información de conexión de los usuarios, son almacenados
          en una instancia independiente en MongoDB Atlas.
        </p>
        <p>
          De esta forma, se distribuye mejor el coste y la carga de escritura y
          lectura, dado que las operaciones de escritura relacionadas con los
          pedidos y las conexiones de los usuarios son más frecuentes, mientras
          que los datos de los restaurantes y los pedidos tienen una lectura
          mayor, pero una baja tasa de operaciones de escritura, permitiendo así
          disctribuir de forma más eficiente los costas y la carga a las bases
          de datos.
        </p>
        <p>
          Decidí usar bases de datos no relacionales dada la poca relación de
          los datos entre sí, y que Amazon Web Services ofrece más capacidad
          bajo su{" "}
          <ExternalLink href="https://aws.amazon.com/es/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=categories%23databases">
            capa gratuita de servicios para DynamoDB
          </ExternalLink>
          , que otros servicios de bases de datos relacionales, para así
          mantener un coste bajo durante las primeras fases del proyecto.
        </p>
      </div>,
      <div>
        <h4 className="center">Datos estáticos</h4>
        <p>
          Los datos estáticos como las imágenes de los productos, así como los
          estáticos de la aplicaciones web son almacenados en{" "}
          <ExternalLink href="https://aws.amazon.com/es/s3/">
            Amazon S3
          </ExternalLink>
          , y servidos a través de{" "}
          <ExternalLink href="https://aws.amazon.com/es/cloudfront/">
            AWS Cloudfront
          </ExternalLink>
        </p>
      </div>,
    ],
    en: [
      <div>
        <h4 className="center">
          The backend of the OrdNServe project is divided into several
          microservices for data management in the databases, and a group of
          dedicated servers for service and order management, so that they are
          independent of each other.
        </h4>
      </div>,
      <div id={ids.dbMicroservices}>
        <h4 className="center">Microservices for databases</h4>
        <p>
          The interaction with the databases is performed through microservices
          deployed in different{" "}
          <ExternalLink href="https://aws.amazon.com/es/api-gateway/">
            AWS API Gateway
          </ExternalLink>{" "}
          instances, each one with its own authentication according to the type
          of user{" "}
          <small>
            (see <Link to="/code-samples/user-security">user permissions</Link>)
          </small>
          , connected to different{" "}
          <ExternalLink href="https://aws.amazon.com/es/lambda/">
            AWS Lambda
          </ExternalLink>{" "}
          functions, which perform the data writing operations on{" "}
          <ExternalLink href="https://aws.amazon.com/es/dynamodb/">
            DynamoDB
          </ExternalLink>
          .
        </p>
        <p>
          After the write operation, the Lambda function itself notifies the{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            group of servers that manage the service
          </Link>
          , and these in turn notify the API Gateway instance used to perform
          communications through WebSockets, thus keeping user applications
          updated in real time.
        </p>
      </div>,
      <div id={ids.serviceArchitecture}>
        <h4 className="center"> Ordering and restaurant services</h4>
        <p>
          It consists of a group of{" "}
          <ExternalLink href="https://aws.amazon.com/es/ec2/">
            EC2 Servers
          </ExternalLink>{" "}
          behind a{" "}
          <ExternalLink href="https://aws.amazon.com/es/elasticloadbalancing/">
            load balancer
          </ExternalLink>
          , inside its own{" "}
          <ExternalLink href="https://aws.amazon.com/es/vpc/">VPC</ExternalLink>
          , which receives the requests routed by API Gateway instances{" "}
          <ExternalLink href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html">
            configured as proxy
          </ExternalLink>
          , which are in charge of authorizing and rerouting the requests.
        </p>
        <p>
          These servers are programmed on{" "}
          <ExternalLink href="https://nodejs.org/">NodeJS</ExternalLink>, using{" "}
          <ExternalLink href="https://expressjs.com/es/">
            ExpressJS
          </ExternalLink>{" "}
          to organize the different routes, and{" "}
          <ExternalLink href="https://xstate.js.org/">XState</ExternalLink> to
          execute the changes on the order, guaranteeing this way the correct
          life cycle of the order. The order status is stored in a{" "}
          <ExternalLink href="https://www.mongodb.com/atlas/database">
            MongoDB Atlas
          </ExternalLink>{" "}
          instance, making this data independent from the product and restaurant
          data, which is stored in DynamoDB.
        </p>
      </div>,
      <div id={ids.websocketMicroservices}>
        <h4 className="center">Microservices for websockets</h4>
        <p>
          Connections via WebSockets are{" "}
          <ExternalLink href="https://docs.aws.amazon.com/es_es/apigateway/latest/developerguide/apigateway-websocket-api.html">
            handled by API Gateway
          </ExternalLink>
          . It authenticates users through a Lambda function, and routes their
          messages to the load balancer of the{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            ordering services and the restaurant service
          </Link>
          , which process the request, and then calls this API Gateway instance
          back to send the response to the user.
        </p>
      </div>,
      <div id={ids.databases}>
        <h4 className="center">Databases</h4>
        <p>
          The more permanent data,{" "}
          <Link to={createIdPath(ids.dbMicroservices)} replace>
            related to the products and information of each restaurant,
          </Link>{" "}
          are modified through Lambda functions and stored in DynamoDB.
        </p>
        <p>
          Data related to{" "}
          <Link to={createIdPath(ids.serviceArchitecture)} replace>
            restaurant orders and service
          </Link>
          , as well as user connection information, is stored in a separate
          instance in MongoDB Atlas.
        </p>
        <p>
          This way, the write and read cost and load is better distributed,
          since write operations related to orders and user connections are more
          frequent, while restaurant and order data have a higher read, but a
          low rate of write operations, thus allowing to more efficiently
          distribute the costs and load to the databases.
        </p>
        <p>
          I decided to use non-relational databases given the low relationship
          of the data to each other, and that Amazon Web Services offers more
          capacity under its{" "}
          <ExternalLink href="https://aws.amazon.com/es/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=categories%23databases">
            free service layer for DynamoDB
          </ExternalLink>
          , than other relational database services, in order to keep low costs
          during the early stages of the project.
        </p>
      </div>,
      <div>
        <h4 className="center">Static data</h4>
        <p>
          Static data such as product images, as well as web application statics
          are stored in{" "}
          <ExternalLink href="https://aws.amazon.com/es/s3/">
            Amazon S3
          </ExternalLink>
          , and served through{" "}
          <ExternalLink href="https://aws.amazon.com/es/cloudfront/">
            AWS Cloudfront
          </ExternalLink>
          .
        </p>
      </div>,
    ],
  },
  github: {
    private: true,
    link: null,
  },
  stack: [
    nodejs,
    expressjs,
    xstate,
    mongodb,
    awsAPIGateway,
    awsDynamoDb,
    awsS3,
    awsEC2,
    awsLambda,
    awsCloudfront,
    serverless,
  ],

  time: {
    from: new Date(1614729600000),
  },
  type: "Backend",
};

export default ordNServeBackend;
