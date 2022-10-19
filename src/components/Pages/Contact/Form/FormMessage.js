import LanguageConsumer from "../../../Language/LanguageConsumer";
import FormTextField from "./FormTextField";

const FormMessage = ({
  value,
  name,
  error,
  baseLangPath,
  setChange,
  formStatus,
  animationRef,
}) => {
  return (
    <div
      className="ContactForm__field ContactForm__field--message ContactForm__field--input"
      ref={animationRef}
    >
      <FormTextField
        label={
          <LanguageConsumer
            element="small"
            basePath={baseLangPath}
            path="message"
          />
        }
        value={value}
        name={name}
        error={error}
        onChange={setChange}
        formStatus={formStatus}
        multiline={true}
      />
    </div>
  );
};

export default FormMessage;
