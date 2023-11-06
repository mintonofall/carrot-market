import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    username: string;
    email: string;
    password: string;
}


export default function Form() {
    const {register, handleSubmit} = useForm<LoginForm>();
    const onValid = (data: LoginForm) => {
        console.log("valid")
    }
    const onInvalid = (errors: FieldErrors<LoginForm>) => {   
        console.log(errors)
    }
    
return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input {...register("username", {required: "Username is required", minLength: {value: 5, message: "Username must be at least 5 characters long"}})} placeholder="username" /> 
        <input {...register("email", {required: "Email is required"})} type="email" placeholder="Email" />
        <input {...register("password", {required: "Password is requied"})} type="password" placeholder="password" />
        <input type="submit" value="submit" />
    </form>
)
}