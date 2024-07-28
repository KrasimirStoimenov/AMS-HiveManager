import { useState } from "react";

export function useForm(initialValues, submitHandlerCallback) {
    const [values, setValues] = useState(initialValues);

    function changeHandler(e) {
        e.preventDefault();

        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();

        submitHandlerCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler
    };
}
