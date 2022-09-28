/*import React from "react";
import "./input.css"

export const Input = () => {
   // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <>
            <input {...register("firstName1", {
                required: true,
                minLength: { value: 2, message: 'Ваше имя должно содержать более 2 букв' },
                maxLength: { value: 30, message: 'Ваше имя должно содержать не более 30 букв' }
            })} />
            <p>{errors.firstName1?.message}</p>
        </>
)};*/

import React from "react";
import "./input.css"

export const Input = (props) => {
    return <input {...props} />
}