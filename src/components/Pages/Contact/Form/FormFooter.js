import { Checkbox, Collapse } from "@mui/material";
import MainButton from "../../../Buttons/MainButton";
import LanguageConsumer from "../../../Language/LanguageConsumer";

const FormFooter = ({
  value,
  error,
  name,
  setChange,
  handleSubmit,
  formStatus,
  baseLangPath,
  animationRef,
}) => {
  const { sending, sendError, sendSuccess } = formStatus;
  return (
    <div
      className="ContactForm__field ContactForm__footer ContactForm__field--footer"
      ref={animationRef}
    >
      <Collapse
        className="ContactForm__feedback--container"
        in={Boolean(error || sendError || sendSuccess)}
      >
        <div className="ContactForm__feedback">
          {sendSuccess ? (
            <LanguageConsumer
              className="ContactForm__feedback--success"
              basePath={baseLangPath}
              path="feedback.success"
            />
          ) : null}
          {sendError ? (
            <LanguageConsumer
              className="ContactForm__feedback--error"
              basePath={baseLangPath}
              path="feedback.error"
            />
          ) : null}
          {Boolean(error) ? (
            <LanguageConsumer
              className="ContactForm__feedback--error"
              text={error}
            />
          ) : null}
        </div>
      </Collapse>
      <div className="ContactForm__footer--checkbox">
        <Checkbox
          required
          aria-required
          value={value}
          name={name}
          onChange={setChange}
          color="default"
        />
        <LanguageConsumer
          element="small"
          basePath={baseLangPath}
          path="labels.agreement"
        />
      </div>
      <div className="ContactForm__footer--send">
        <MainButton onClick={handleSubmit} disabled={sending || sendSuccess}>
          <LanguageConsumer
            element="small"
            basePath={baseLangPath}
            path="labels.send"
          />
        </MainButton>
      </div>
    </div>
  );
};

export default FormFooter;
