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
        
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler
    };
}
