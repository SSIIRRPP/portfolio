import LanguageConsumer from "../../../Language/LanguageConsumer";
import FormTextField from "./FormTextField";

const FormEmail = ({
  value,
  name,
  error,
  setChange,
  formStatus,
  baseLangPath,
  animationRef,
}) => {
  return (
    <div
      className="ContactForm__field ContactForm__field--email ContactForm__field--input"
      ref={animationRef}
    >
      <FormTextField
        label={
          <LanguageConsumer
            element="small"
            basePath={baseLangPath}
            path="email"
          />
        }
        value={value}
        name={name}
        error={error}
        onChange={setChange}
        formStatus={formStatus}
        multiline={false}
      />
    </div>
  );
};

export default FormEmail;
