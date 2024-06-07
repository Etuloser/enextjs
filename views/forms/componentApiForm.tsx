"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button, Checkbox } from "@mui/material";

interface IFormInputs {
  TextField: string;
  MyCheckbox: boolean;
}

export default function ComponentApiForm() {
  const { handleSubmit, control, reset, getValues } = useForm<IFormInputs>({
    defaultValues: {
      TextField: "Eles",
      MyCheckbox: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    const submittedData = getValues();
    document.getElementById("submittedValue")!.innerText =
      JSON.stringify(submittedData);
  };

  const handleReset = () => {
    reset({
      TextField: "Eles",
      MyCheckbox: false,
    });
    const submittedData = getValues();
    document.getElementById("submittedValue")!.innerText =
      JSON.stringify(submittedData);
  };

  return (
    <div className="font-mono">
      <div className="bg-stripes-white bg-slate-300 block w-full h-96 border-2 border-yellow-300 p-4">
        <div className="text-lg">Component Api Form</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="TextField"
            control={control}
            rules={{ required: false }}
            render={({ field }) => <TextField {...field} />}
          />
          <Controller
            name="MyCheckbox"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <Checkbox {...field} checked={field["value"] ?? false} />
            )}
          />
          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button variant="contained" type="reset" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
        <span id="submittedValue"></span>
      </div>
    </div>
  );
}
