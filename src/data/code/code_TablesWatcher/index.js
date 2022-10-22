// eslint-disable-next-line import/no-webpack-loader-syntax
/* import full_file from "!!raw-loader!./files/full_file.file.js"; */
// eslint-disable-next-line import/no-webpack-loader-syntax
import Table_file from "!!raw-loader!./files/code/Table.file.js";
// eslint-disable-next-line import/no-webpack-loader-syntax
import ServiceTable_file from "!!raw-loader!./files/code/ServiceTable.file.js";
// eslint-disable-next-line import/no-webpack-loader-syntax
import TablesWatcher_file from "!!raw-loader!./files/code/TablesWatcher.file.js";
// eslint-disable-next-line import/no-webpack-loader-syntax
import useTableVisibility_file from "!!raw-loader!./files/code/useTableVisibility.file.js";
import mesaAtencion1 from "./files/images/server-mesa-atencion-1.png";
import mesaAtencion2 from "./files/images/server-mesa-atencion-2.png";
import { Link } from "react-router-dom";
import ExternalLink from "../../../components/Visual/ExternalLink";
import ProblemSolutionImageCard from "../../../components/Pages/Detail/ProblemSolutionImageCard";
import "./style.scss";
import { appendTextFiles } from "../../../util/codeUtil";

const full_file_pre_string = `// I'm omitting some business logic here, specially on Table.js and ServiceTable.js
// Also omitting the import statements.
`;

const full_file = appendTextFiles([
  full_file_pre_string,
  Table_file,
  ServiceTable_file,
  TablesWatcher_file,
  useTableVisibility_file,
]);

const files = [
  {
    text: { spa: "Archivo completo", en: "Full archive" },
    id: "full_file",
    file: full_file,
  },
  {
    text: { spa: "Table.js", en: "Table.js" },
    id: "Table_file",
    file: Table_file,
  },
  {
    text: { spa: "ServiceTable.js", en: "ServiceTable.js" },
    id: "ServiceTable_file",
    file: ServiceTable_file,
  },
  {
    text: { spa: "TablesWatcher.js", en: "TablesWatcher.js" },
    id: "TablesWatcher_file",
    file: TablesWatcher_file,
  },
  {
    text: { spa: "useTableVisibility.js", en: "useTableVisibility.js" },
    id: "useTableVisibility_file",
    file: useTableVisibility_file,
  },
];

const imagesStyle = {
  maxWidth: 350,
  aspectRatio: 1 / 1.9,
};

const serverAtencion = (
  <div className="code_TablesWatcher__server-atencion--images">
    <ProblemSolutionImageCard
      problem={{
        src: mesaAtencion1,
        alt: "mesa-atencion-1",
        withModal: true,
        text: {
          spa: (
            <>
              Una de las mesas requiere atención por parte del camarero{" "}
              <small>(circulo rojo)</small>.
            </>
          ),
          en: (
            <>
              One of the tables needs attention from the server{" "}
              <small>(red circle)</small>.
            </>
          ),
        },
        styles: {
          image: imagesStyle,
        },
      }}
      solution={{
        src: mesaAtencion2,
        alt: "mesa-atencion-2",
        withModal: true,
        text: {
          spa: (
            <>
              Si la mesa no está dentro del viewport, un icono se lo indica al
              camarero <small>(circulo rojo)</small>.
            </>
          ),
          en: (
            <>
              If the table is not within the viewport, an icon indicates this to
              the server <small>(red circle)</small>.
            </>
          ),
        },
        styles: {
          image: imagesStyle,
        },
        imageProps: {},
      }}
    />
  </div>
);

const code_TablesWatcher = {
  title: "TablesWatcher",
  id: "TablesWatcher",
  short: {
    en: [
      <div>
        <p>
          Component developed to control the visibility of the restaurant tables
          within the layout.
        </p>
      </div>,
    ],
    spa: [
      <div>
        <p>
          Componente desarrollado para controlar la visibilidad de las mesas del
          restaurante dentro del layout.
        </p>
      </div>,
    ],
  },
  text_file: files,
  type: "React Component",
  details: {
    en: [
      <div className="code_TablesWatcher__server-atencion">
        <div className="code_TablesWatcher__server-atencion--textFirst">
          <p>
            I developed this component for the{" "}
            <Link to="/projects/ordnserve-server">OrdNServe Server</Link>{" "}
            application, to control whether or not the tables were visible to
            the server in the main view.
          </p>
          <p>
            The main motivation for making this component was to make it visible
            to the server that one of the tables requires attention when it is
            not within the visible area of the viewport:
          </p>
        </div>
        {serverAtencion}
        <div className="code_TablesWatcher__server-atencion--textSecond">
          <p>
            This is achieved thanks to an{" "}
            <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
              IntersectionObserver
            </ExternalLink>
            , which controls where each table is located within the layout.
          </p>
          <p>
            When a table needs the server's attention, and detects that it is
            not inside the layout, it calculates its position thanks to the hook
            useTableVisibility, and notifies the TablesWatcher component.
          </p>
          <p>
            This component renders the icon that notifies the server whether
            there are tables above or below the scroll level, indicating the
            number in each case.
          </p>
          <p>
            This makes the server aware of when to attend on tables, improving
            the user experience.
          </p>
          <p>For more details, see the provided code files.</p>
        </div>
      </div>,
    ],
    spa: [
      <div className="code_TablesWatcher__server-atencion">
        <div className="code_TablesWatcher__server-atencion--textFirst">
          <p>
            Desarrollé este componente para la aplicación{" "}
            <Link to="/projects/ordnserve-server">OrdNServe Server</Link>, para
            controlar si las mesas eran visibles o no para el camarero en la
            vista principal.
          </p>
          <p>
            La principal motivación para hacer este componente, fué hacer
            visible para el camarero que una de las mesas requiere atención
            cuando no está dentro del area visible del viewport:
          </p>
        </div>
        {serverAtencion}
        <div className="code_TablesWatcher__server-atencion--textSecond">
          <p>
            Esto es conseguido gracias a un{" "}
            <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
              IntersectionObserver
            </ExternalLink>
            , que controla dónde se sitúa cada mesa dentro del layout.
          </p>
          <p>
            Cuando una mesa necesita la atención del camarero, y detecta que no
            está dentro del layout, calcula su posición gracias al hook
            useTableVisibility, y notifica al componente TablesWatcher.
          </p>
          <p>
            Éste renderiza el icono que avisa al camarero tanto si hay mesas por
            encima del nivel de scroll, como por debajo, indicando el número en
            cada caso.
          </p>
          <p>
            Ésto hace que el camarero sea consciente de cuando ha de atender a
            las mesas, mejorando la experiencia de usuario.
          </p>
          <p>
            Para más detalles, consulte los archivos de código proporcionados.
          </p>
        </div>
      </div>,
    ],
  },
};

export default code_TablesWatcher;
