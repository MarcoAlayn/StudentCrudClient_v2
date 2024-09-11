import { useEffect, useState } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    const fieldErrors = validate({ ...values, [name]: value });
    setErrors(fieldErrors);
  };

  useEffect(() => {
    let isDifferent = false;

    //verificamos si los valores han cambiado
    for (let key in initialValues) {
      if (initialValues[key] !== values[key]) {
        isDifferent = true;
        break;
      }
    }

    //validamos si existen errores y los valores han cambiado
    const hasNoErrors = Object.keys(errors).length === 0;

    if (hasNoErrors && isDifferent) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }

    console.log({ values, errors, isDisable }); // Debugging
  }, [values, errors, initialValues]);

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      callback();
    }
  };

  return { values, handleChange, handleSubmit, errors, isDisable };
};

export default useForm;
