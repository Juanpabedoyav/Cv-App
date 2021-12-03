import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);

    const reset = () => {
        setForm(initialState);
    }

    const handleInputChange = ({ target }) => {

        setForm({
            ...form,
            [target.name]: target.value
        });

        console.log(form)

    }



    return [form, handleInputChange, reset];

}