// eslint-disable-next-line import/no-webpack-loader-syntax
import MouseParallax_file from '!!raw-loader!./files/code/MouseParallax.file.js';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Layout_file from '!!raw-loader!./files/code/LayoutContext.file.js';
import { appendTextFiles } from '../../../util/codeUtil';
import ExternalLink from '../../../components/Visual/ExternalLink';

const file_pre_string = `// I'm omitting some business logic.
// Also omitting most of the import statements.
`;

const files = [
  {
    text: { spa: 'Archivo completo', en: 'Full archive' },
    id: 'full_file',
    file: appendTextFiles([file_pre_string, MouseParallax_file, Layout_file]),
  },
  {
    text: { spa: 'MouseParallax.js', en: 'MouseParallax.js' },
    id: 'MouseParallax_file',
    file: appendTextFiles([file_pre_string, MouseParallax_file]),
  },
  {
    text: { spa: 'Layout.js', en: 'Layout.js' },
    id: 'Layout_file',
    file: appendTextFiles([file_pre_string, Layout_file]),
  },
];

const code_MouseParallax = {
  title: 'MouseParallax',
  id: 'MouseParallax',
  short: {
    en: [
      <div>
        <p>
          Component developed to give a parallax effect according to the
          movement of the cursor on the screen by the user.
        </p>
      </div>,
    ],
    spa: [
      <div>
        <p>
          Componente desarrollado para dar un efecto de paralaje acorde al
          movimiento del cursor en la pantalla por parte del usuario.
        </p>
      </div>,
    ],
  },
  text_file: files,
  type: 'React Component',
  details: {
    en: [
      <div>
        <p>
          Component developed to give a parallax effect according to the
          movement of the cursor on the screen by the user.
        </p>
      </div>,
      <div>
        <p>
          Extends the{' '}
          <ExternalLink to="https://www.npmjs.com/package/react-parallax-mouse">
            "react-parallax-mouse"
          </ExternalLink>{' '}
          NPM package, wrapping it to work along the rest of the project's
          components and context.
        </p>
      </div>,
      <div>
        <p>
          If it is detected that the user may be using a touch screen, and
          therefore has no cursor, the component's functionality is disabled to
          improve performance.
        </p>
      </div>,
    ],
    spa: [
      <div>
        <p>
          Componente desarrollado para dar un efecto de paralaje acorde al
          movimiento del cursor en la pantalla por parte del usuario.
        </p>
      </div>,
      <div>
        <p>
          Extiende el paquete de npm{' '}
          <ExternalLink to="https://www.npmjs.com/package/react-parallax-mouse">
            "react-parallax-mouse"
          </ExternalLink>
          , envolviéndolo para que funcione junto con el resto de los
          componentes y el contexto del proyecto.
        </p>
      </div>,
      <div>
        <p>
          Si se detecta que el usuario puede estar usando una pantalla táctil, y
          por consiguiente no tiene cursor, la funcionalidad del componente se
          desactiva para mejorar el rendimiento.
        </p>
      </div>,
    ],
  },
};

export default code_MouseParallax;
