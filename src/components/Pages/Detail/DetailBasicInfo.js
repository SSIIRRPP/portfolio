import { useMemo, useState } from 'react';
import AnimationStepper from 'react-animation-stepper';
import Link from '../../Visual/Link';
import Short from '../../Visual/Short';
import DetailInfoCard from './DetailInfoCard';
import TechStack from '../../Visual/TechStack';
import './styles/DetailBasicInfo.scss';

const Placeholder = ({ animationRef, className = '' }) => (
  <div
    ref={animationRef}
    className={className}
  />
);

const DetailBasicInfo = ({ data, animationRef, type, animationEnded }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const components = useMemo(
    () => ({
      info: (
        <DetailInfoCard
          animationCompleted={animationCompleted}
          data={data}
          type={type}
        />
      ),
      short: (
        <Short
          className="DetailBasicInfo__short"
          short={data.short}
        />
      ),
      stack: data.stack ? (
        <TechStack
          className={`DetailBasicInfo__stack${
            !data.link ? ' avoid-link-padding' : ''
          }`}
          animationCompleted={animationCompleted}
          stack={data.stack}
        />
      ) : (
        <Placeholder className="DetailBasicInfo__stack" />
      ),
      link: data.link ? (
        <Link
          useExternalLink
          className="DetailBasicInfo__link"
          link={data.link}
          type="light"
        />
      ) : (
        <Placeholder className="DetailBasicInfo__link" />
      ),
    }),
    [data, animationCompleted, type]
  );

  const steps = useMemo(
    () => [
      {
        config: {
          short: {
            classes: 'fade-in-comp',
            keepConfig: true,
            delay: 200,
          },
          info: {
            classes: 'fade-in-comp',
            keepConfig: true,
          },
        },
        duration: 200,
        elements: ['info', 'short'],
      },
      {
        config: {
          link: {
            style: {
              animation: 'fade-in-animation-to-left',
            },
            keepConfig: true,
            delay: 200,
          },
          stack: {
            style: {
              animation: 'fade-in-animation-to-right',
            },
            keepConfig: true,
          },
        },
        duration: 200,
        elements: ['link', 'stack'],
      },
    ],
    []
  );

  return (
    <div
      className="DetailBasicInfo"
      ref={animationRef}
    >
      <AnimationStepper
        steps={steps}
        components={components}
        automaticPlay={animationEnded}
        onEnd={() => setAnimationCompleted(true)}
      />
    </div>
  );
};

export default DetailBasicInfo;
