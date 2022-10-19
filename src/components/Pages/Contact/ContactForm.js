import { useCallback, useState } from "react";
import { contactUrl, recaptchaKey } from "../../../constants";
import ContactFormVisual from "./ContactFormVisual";
import validateContactForm, { validations } from "./contactValidation";
import "./styles/ContactForm.scss";

const initialFormState = {
  name: "",
  email: "",
  message: "",
  agreement: false,
};

const initialErrorsState = {
  name: null,
  email: null,
  message: null,
  agreement: null,
};

const ContactForm = ({ show }) => {
  const [state, setState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(null);

  const setChange = useCallback(
    (e) => {
      const { value, name, checked } = e.target;
      if (name !== "agreement") {
        setState((s) => ({ ...s, [name]: value }));
      } else {
        setState((s) => ({ ...s, [name]: checked }));
      }
      setErrors(validations[name](errors, value));
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newErrors = validateContactForm(state, errors);
      setSendError(null);
      setErrors(newErrors);
      if (!Boolean(Object.values(newErrors).find((e) => !!e))) {
        setSending(true);
        try {
          window.grecaptcha.enterprise.execute(recaptchaKey).then((r) => {
            window.grecaptcha.enterprise.reset(recaptchaKey);
            // then, fetch
            return fetch(contactUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...state, captcha: r }),
            }).then((res) => {
              if (res.status === 200 || res.status === 204) {
                setSendSuccess(true);
              } else {
                setSendError(res);
              }
            });
          });
        } catch (e) {
          console.error(e);
          setSendError(e);
        } finally {
          setSending(false);
        }
      }
    },
    [state, errors]
  );

  return (
    <ContactFormVisual
      state={state}
      errors={errors}
      formStatus={{ sending, sendError, sendSuccess }}
      setChange={setChange}
      handleSubmit={handleSubmit}
      show={show}
    />
  );
};

export default ContactForm;
