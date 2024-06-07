'use client'
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    firstName: string
    lastName: string
    age: number
}

export default function ValidationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            {errors.firstName && <span>This field is required</span>}
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            {errors.lastName && <span>Pattern is /^[A-Za-z]+$/i</span>}
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            {errors.age && <span>Age must between 18 to 99</span>}
            <input type="submit" />
        </form>
    )
}