import React, { useState } from "react";

const Form = props => {
    const [form, setForm] = useState ({
        name: " ",
        email: " ",
        role: " "
    })

    const changeHandler = event => {
        setForm ({...form, [event.target.name]: event.target.value})
    };
    
    const submitForm = event => {
        event.preventDefault();
        const newForm = {
            ...form, 
            id: form.name
        }
        props.addNewMembers (newForm);
        setForm ({name: " ", email: " ", role: " "})
     };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Name">Name </label>
            <input  
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange = {changeHandler}
            />
            <label htmlFor="email">E-mail </label>
            <input  
                type="text"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange = {changeHandler}
            />
            <label htmlFor="role">Role </label>
            <input  
                type="text"
                name="role"
                placeholder="Role"
                value={form.role}
                onChange = {changeHandler}
            />
            <button type="submit">Add Member</button>
        </form>

    )
}

export default Form;