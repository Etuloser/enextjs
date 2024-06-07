'use client'
import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input } from "@mui/material"

interface IFormInput {
    firstName: string
    lastName: string
    iceCreamType: { label: string; value: string }
}

const UiForm = () => {
    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            firstName: "",
            lastName: "",
            iceCreamType: {},
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* React Hook Form 使得与外部 UI 组件库的集成变得容易。如果组件未公开输入 ref 的 ，则应使用 Controller 组件，该组件将负责注册过程。 */}
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
            /><Controller
                name="iceCreamType"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" },
                        ]}
                    />
                )}
            />
            <input type="submit" />
        </form>
    )
}
export default UiForm