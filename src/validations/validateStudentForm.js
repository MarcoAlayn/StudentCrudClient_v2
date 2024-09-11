import {
  onlyLetters,
  onlyLettersAndSpaces,
  onlyNumbers,
  emailFormat,
} from "../utils/regex";

const validateStudentForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Campo obligatorio";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Mínimo 2 caracteres";
  } else if (values.firstName.length > 10) {
    errors.firstName = "Máximo 10 caracteres";
  } else if (!onlyLetters.test(values.firstName)) {
    errors.firstName = "Solo letras";
  }

  if (!values.middleName) {
    errors.middleName = "Campo obligatorio";
  } else if (values.middleName.length < 2) {
    errors.middleName = "Mínimo 2 caracteres";
  } else if (values.middleName.length > 10) {
    errors.middleName = "Máximo 10 caracteres";
  } else if (!onlyLetters.test(values.middleName)) {
    errors.middleName = "Solo letras";
  }

  if (!values.lastName) {
    errors.lastName = "Campo obligatorio";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Mínimo 2 caracteres";
  } else if (values.lastName.length > 10) {
    errors.lastName = "Máximo 10 caracteres";
  } else if (!onlyLetters.test(values.lastName)) {
    errors.lastName = "Solo letras";
  }

  if (!values.gender) {
    errors.gender = "Campo obligatorio";
  }

  if (!values.addressLine) {
    errors.addressLine = "Campo obligatorio";
  } else if (values.addressLine.length < 5) {
    errors.addressLine = "Mínimo 5 caracteres";
  } else if (values.addressLine.length > 50) {
    errors.addressLine = "Máximo 50 caracteres";
  }

  if (!values.city) {
    errors.city = "Campo obligatorio";
  } else if (values.city.length < 2) {
    errors.city = "Mínimo 2 caracteres";
  } else if (values.city.length > 30) {
    errors.city = "Máximo 30 caracteres";
  } else if (!onlyLettersAndSpaces.test(values.city)) {
    errors.city = "Solo letras y espacios";
  }

  if (!values.zipPostcode) {
    errors.zipPostcode = "Campo obligatorio";
  } else if (values.zipPostcode.length < 5) {
    errors.zipPostcode = "Mínimo 5 caracteres";
  } else if (values.zipPostcode.length > 10) {
    errors.zipPostcode = "Máximo 10 caracteres";
  } else if (!onlyNumbers.test(values.zipPostcode)) {
    errors.zipPostcode = "Solo números";
  }

  if (!values.state) {
    errors.state = "Campo obligatorio";
  } else if (values.state.length < 2) {
    errors.state = "Mínimo 2 caracteres";
  } else if (values.state.length > 30) {
    errors.state = "Máximo 30 caracteres";
  } else if (!onlyLettersAndSpaces.test(values.state)) {
    errors.state = "Solo letras y espacios";
  }

  if (!values.email) {
    errors.email = "Campo obligatorio";
  } else if (!emailFormat.test(values.email)) {
    errors.email = "Debe ser un email válido";
  }

  if (!values.emailType) {
    errors.emailType = "Campo obligatorio";
  }

  if (!values.phone) {
    errors.phone = "Campo obligatorio";
  } else if (values.phone.length < 10) {
    errors.phone = "Mínimo 10 dígitos";
  } else if (values.phone.length > 15) {
    errors.phone = "Máximo 15 dígitos";
  } else if (!onlyNumbers.test(values.phone)) {
    errors.phone = "Solo números";
  }

  if (!values.phoneType) {
    errors.phoneType = "Campo obligatorio";
  }

  if (!values.countryCode) {
    errors.countryCode = "Campo obligatorio";
  } else if (values.countryCode.length < 1) {
    errors.countryCode = "Mínimo 1 dígito";
  } else if (values.countryCode.length > 3) {
    errors.countryCode = "Máximo 3 dígitos";
  } else if (!onlyNumbers.test(values.countryCode)) {
    errors.countryCode = "Solo números";
  }

  if (!values.areaCode) {
    errors.areaCode = "Campo obligatorio";
  } else if (values.areaCode.length < 1) {
    errors.areaCode = "Mínimo 1 dígito";
  } else if (values.areaCode.length > 3) {
    errors.areaCode = "Máximo 3 dígitos";
  } else if (!onlyNumbers.test(values.areaCode)) {
    errors.areaCode = "Solo números";
  }

  return errors;
};

export default validateStudentForm;
