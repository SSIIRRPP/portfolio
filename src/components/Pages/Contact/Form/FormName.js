import LanguageConsumer from "../../../Language/LanguageConsumer";
import FormTextField from "./FormTextField";

const FormName = ({
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
      className="ContactForm__field ContactForm__field--name ContactForm__field--input"
      ref={animationRef}
    >
      <FormTextField
        label={
          <LanguageConsumer
            element="small"
            basePath={baseLangPath}
            path="name"
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

export default FormName;
