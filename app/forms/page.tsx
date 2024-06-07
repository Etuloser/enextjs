'use client'
import BasicForms from "@/views/forms/basicForm"
import IntergrationForm from "@/views/forms/intergrationForm"
import RegisterFieldsForm from "@/views/forms/registerFieldsForm"
import ValidationForm from "@/views/forms/validationForm"
// import UiForm from "./uiForm"
import ComponentApiForm from "@/views/forms/componentApiForm"
import HooksForm from "@/views/forms/hooksForm"

export default function FormPage() {
    return (
        <div>
            <h1 className="text-lg">This is forms page</h1>
            <BasicForms />
            <RegisterFieldsForm />
            <ValidationForm />
            <IntergrationForm />
            {/* <UiForm /> */}
            <ComponentApiForm />
            <HooksForm />
        </div>
    )
}