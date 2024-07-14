"use client";

import { Button } from "@/app/_components/button";
import { useForm } from "react-hook-form";
import { SignIn } from "../_types/signin.types";
import { TextInput } from "@/app/_components/form-input";
import { useSignin } from "../_apis/signin";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>();

  const router = useRouter();

  const signin = useSignin({
    onSuccess: () => {
      router.push(`/verify?mobile=${getValues("mobile")}`);
    },
  });

  const onSubmit = (data: SignIn) => {
    signin.submit(data);
  };

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput<SignIn>
          register={register}
          name="mobile"
          rules={{
            required: "شماره موبایل الزامی است",
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
          placeholder="شماره موبایل"
        />
        <Button type="submit" variant="primary" isLoading={signin.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
