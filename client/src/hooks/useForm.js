import { useState } from "react";

export function useForm(initialValues, submitHandlerCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitHandlerCallback(values);
    }

    const reinitializeValues = (values) => {
        setValues(values);
    }

    return {
        values,
        changeHandler,
        submitHandler,
        reinitializeValues
    };
}
