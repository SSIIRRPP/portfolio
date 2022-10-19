export const validateEmail = (errors, email, lang) => {
  const errorText = {
    spa: "Introduce un email válido",
    en: "Enter a valid email address",
  };
  let newErrors = { ...errors };
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    newErrors.email = errorText;
  } else {
    if (newErrors.email) {
      delete newErrors.email;
    }
  }
  return newErrors;
};

export const validateName = (errors, value, lang) => {
  const errorText = {
    spa: "Campo requerido",
    en: "Required field",
  };
  let newErrors = { ...errors };
  if (!(value.length > 0)) {
    newErrors.name = errorText;
  } else {
    if (newErrors.name) {
      delete newErrors.name;
    }
  }
  return newErrors;
};

export const validateMessage = (errors, value, lang) => {
  const errorText = {
    spa: "Campo requerido",
    en: "Required field",
  };
  let newErrors = { ...errors };
  if (!(value.length > 0)) {
    newErrors.message = errorText;
  } else {
    if (newErrors.message) {
      delete newErrors.message;
    }
  }
  return newErrors;
};

export const validateAgreement = (errors, value, lang) => {
  const errorText = {
    spa: "Debes aceptar las condiciones.",
    en: "You must agree to the conditions.",
  };
  let newErrors = { ...errors };
  if (!value) {
    newErrors.agreement = errorText;
  } else {
    if (newErrors.agreement) {
      delete newErrors.agreement;
    }
  }
  return newErrors;
};

export const validations = {
  email: validateEmail,
  name: validateName,
  message: validateMessage,
  agreement: validateAgreement,
};

const validateContactForm = (state, lang) => {
  let errs = {};
  Object.entries(state).forEach((entry) => {
    errs = { ...errs, ...validations[entry[0]](errs, entry[1], lang) };
  });
  return errs;
};

export default validateContactForm;
