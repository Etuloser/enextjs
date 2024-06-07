// 注意要标注use client, 否则会报错
'use client'
import { useForm, SubmitHandler } from "react-hook-form"

// 定义表单Object
type Inputs = {
    example: string
    exampleRequired: string
}

export default function BasicForm() {
    // 结构函数和属性出来使用
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>() // 给useForm指定泛型, 表明useForm使用Inputs类型, 以提供类型检查
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    // watch函数可以实时监测键入的example的值
    console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        // handleSubmit函数会在onSubmit函数调用前校验表单数据
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="border" defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input className="border" {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="bg-slate-500" type="submit" />
        </form>
    )
}