/*
We don't need jsx extension because we do not have HTML-JSX elements
Our custom hooks must start with use, otherwise React has no way of knowing that it is a hook.
When we use custom hooks we have access to other hooks, states and etc.
 
Initial values is an object with the default values we give in the Login component:
mount --> email: '', password: ''
With each letter we type, the state changes. We don't know from which input the onChange was called.

When we change the value in the state -> setValues will save the changes, then tell not only the useForm, but also the component from where to call the onChange function to rerender.

Don't forget to set e.preventDefault on the submit form because it always tries to reload.

In onSubmit we need callback function (another function that is given by us and we say that we want this function to execute then when we are done)

The submitHandler is in App.jsx because we don't need to maintain the user state only in the login component. We want the whole app to use it - to know if there is user or not. This also is called - lifting State.
SubmitHandler is created in App.jsx, passed in the App.jsx to the Login component as a prop, then passed to the useForm as the first prop.

*/

import { useState } from "react";

export default function useForm(submitHandler,initialValues) {

    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}