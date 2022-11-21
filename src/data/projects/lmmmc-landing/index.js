import { Link } from 'react-router-dom';
import ExternalLink from '../../../components/Visual/ExternalLink';
import {
  react,
  mongodb,
  nodejs,
  expressjs,
  awsAPIGateway,
  awsEC2,
  awsS3,
  awsCloudfront,
  sass,
} from '../../technologies';

const LMMMCLanding = {
  title: 'La Manga Mar Menor Charter',
  id: 'lmmmc-landing',
  short: {
    spa: 'Landing page hecha para una empresa de alquiler de barcos.',
    en: 'Landing page made for a boat rental company.',
  },
  details: {
    spa: [
      <div>
        <h4 className="center">Propósito</h4>
        <p>Landing page hecha para una empresa de alquiler de barcos.</p>
        <p>
          Fué encargada por el dueño de la empresa y entregada 2 meses después.
          A dia de hoy sigo manteniéndola y actualizando los precios a
          conveniencia del cliente cuando lo requiere.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          Cuenta con componentes componentes como{' '}
          <Link to="/code-samples/AdjustableParallaxBanner">
            AdjustableParallaxBanner
          </Link>{' '}
          o <Link to="/code-samples/MouseParallax">MouseParallax</Link>, que
          ofrecen al usuario una experiencia más dinámica al proporcionar fondos
          que cambian de tamaño y posición a medida que el usuario navega por la
          página.
        </p>
        <p>
          También cuenta con el componente{' '}
          <Link to="/code-samples/ImageCarousel">ImageCarousel</Link>,
          desarrollado sobre el{' '}
          <ExternalLink href="https://react-bootstrap.github.io/components/carousel/">
            Carousel de React Bootstrap
          </ExternalLink>
          , que permite declarar las diapositivas de forma declarativa,
          permitiendo así modificarlas o añadir más rápidamente.
        </p>
        <p>Cuenta con temas claro y oscuro</p>
      </div>,
      <div>
        <h4 className="center">Gestión del estado</h4>
        <p>
          Dado a la simplicidad de la página, ésta almacena su estado en
          contextos separados para el idioma, el tema, y ciertos estados
          relacionados con el layout, como las dimensiones de la página, si se
          está haciendo scroll, o si el usuario navega desde un dispositivo
          móvil o desde escritorio.
        </p>
      </div>,
    ],
    en: [
      <div>
        <h4 className="center">Purpose</h4>
        <p>Landing page made for a boat rental company.</p>
        <p>
          It was ordered by the owner of the company and delivered 2 months
          later, I still maintain it and update the prices at the customer's
          convenience when required.
        </p>
      </div>,
      <div>
        <h4 className="center">UI/UX</h4>
        <p>
          It has components such as{' '}
          <Link to="/code-samples/AdjustableParallaxBanner">
            AdjustableParallaxBanner
          </Link>{' '}
          or <Link to="/code-samples/MouseParallax">MouseParallax</Link>, that
          give the user a more dynamic experience, providing backgrounds that
          change size and position as the user navigates through the page.
        </p>
        <p>
          It also has the{' '}
          <Link to="/code-samples/ImageCarousel">ImageCarousel</Link> component,
          developed on top of the{' '}
          <ExternalLink href="https://react-bootstrap.github.io/components/carousel/">
            Carousel from React Bootstrap
          </ExternalLink>
          , which allows to declare slides in a declarative way, allowing to
          modify or add to them more quickly.
        </p>
        <p>It has light and dark themes.</p>
      </div>,
      <div>
        <h4 className="center">State management</h4>
        <p>
          Due to the simplicity of the page, it stores its state in separate
          contexts for language, theme, and certain layout-related states, such
          as page dimensions, whether the user is scrolling, or is navigating
          from a mobile device or desktop.
        </p>
      </div>,
    ],
  },
  link: 'https://www.lamangamarmenorcharter.com?lang=en',
  github: {
    private: false,
    link: 'https://github.com/SSIIRRPP/LMMMC-landing',
  },
  stack: {
    front: [react, sass],
    back: [
      nodejs,
      mongodb,
      expressjs,
      awsAPIGateway,
      awsEC2,
      awsS3,
      awsCloudfront,
    ],
  },
  time: {
    from: new Date(1613088000000),
    to: new Date(1618444800000),
  },
  type: 'Landing Page',
  mobileFirst: true,
};

export default LMMMCLanding;
