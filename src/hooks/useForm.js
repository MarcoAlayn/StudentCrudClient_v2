import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    const newErrors = validate({ ...values, [name]: value }); //para validar en tiempo real
    setErrors(newErrors);
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    const newErrors = validate(values); //ultima barrera de validación
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      callback();
    }
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
