import { useForm } from "../hooks/useForm";
import { useEffect, useRef } from "react";

export const FormComponent = () => {

    const focusRef = useRef();

    const initialForm = {
        username: '',
        email: '',
        password: '',
    }

    const { formState, onInputChange } = useForm(initialForm);


    const { username, email, password } = formState;


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
      };

    useEffect(() => {
        focusRef.current.focus();
    }, []);
    

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" name="username" 
                    placeholder="Username" value={username} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input ref={focusRef} type="email" className="form-control" name="email" 
                    placeholder="Email" value={email} onChange={onInputChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" 
                    placeholder="Password" value={password} onChange={onInputChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>

    )
}