import { Container } from "@mui/system";
import { useMemo, useRef } from "react";
import AnimationStepper from "react-animation-stepper";
import useAnimation from "../../../hooks/useAnimation";
import FormEmail from "./Form/FormEmail";
import FormFooter from "./Form/FormFooter";
import FormMessage from "./Form/FormMessage";
import FormName from "./Form/FormName";

const baseLangPath = "Pages.Contact.form";

const ContactFormVisual = ({
  state,
  errors,
  formStatus,
  setChange,
  handleSubmit,
  show,
}) => {
  const ref = useRef();
  const { finished } = useAnimation({
    condition: show,
    element: ref,
    animations: "fade-in-comp",
    time: 600,
    keepActive: true,
  });
  const components = useMemo(
    () => ({
      name: (
        <FormName
          value={state.name}
          error={errors.name}
          name="name"
          setChange={setChange}
          baseLangPath={`${baseLangPath}.labels`}
          formStatus={formStatus}
        />
      ),
      email: (
        <FormEmail
          value={state.email}
          error={errors.email}
          name="email"
          setChange={setChange}
          baseLangPath={`${baseLangPath}.labels`}
          formStatus={formStatus}
        />
      ),
      message: (
        <FormMessage
          value={state.message}
          error={errors.message}
          name="message"
          setChange={setChange}
          baseLangPath={`${baseLangPath}.labels`}
          formStatus={formStatus}
        />
      ),
      footer: (
        <FormFooter
          value={state.agreement}
          error={errors.agreement}
          handleSubmit={handleSubmit}
          name="agreement"
          setChange={setChange}
          baseLangPath={baseLangPath}
          formStatus={formStatus}
        />
      ),
    }),
    [state, errors, setChange, formStatus, handleSubmit]
  );
  const steps = useMemo(
    () => [
      {
        config: {
          name: {
            classes: "fade-to-right",
            keepConfig: true,
          },
          email: {
            classes: "fade-to-left",
            keepConfig: true,
            delay: 100,
          },
        },
        elements: ["name", "email"],
        duration: 400,
      },
      {
        config: {
          message: {
            classes: "fade-to-right",
            keepConfig: true,
          },
          footer: {
            classes: "fade-to-left",
            keepConfig: true,
            delay: 100,
          },
        },
        elements: ["message", "footer"],
        duration: 400,
      },
    ],
    []
  );
  return (
    <Container className="ContactForm__wrapper" ref={ref}>
      <form className="ContactForm" onSubmit={handleSubmit}>
        <AnimationStepper
          components={components}
          steps={steps}
          automaticPlay={finished}
        />
      </form>
    </Container>
  );
};

export default ContactFormVisual;
