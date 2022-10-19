import { TextField } from "@mui/material";
import LanguageConsumer from "../../../Language/LanguageConsumer";

const FormTextField = ({
  value,
  error,
  label,
  name,
  formStatus,
  multiline,
  onChange,
}) => {
  const { sending, sendSuccess } = formStatus;
  return (
    <div className="ContactForm__field--textfield">
      <TextField
        required
        aria-required
        value={value}
        name={name}
        label={label}
        error={Boolean(error)}
        /* helperText={error} */
        helperText={
          Boolean(error) ? (
            <LanguageConsumer element="span" text={error} />
          ) : undefined
        }
        disabled={sending || sendSuccess}
        onChange={onChange}
        multiline={multiline}
        minRows={multiline ? 3 : undefined}
      />
    </div>
  );
};

export default FormTextField;
