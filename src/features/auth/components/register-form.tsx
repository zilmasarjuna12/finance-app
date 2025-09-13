import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

import { useAuth } from "../hooks/use-auth";

import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import { type RegisterFormData, registerSchema } from "../schemas/register";

import { RegisterRequest } from "../types";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const request: RegisterRequest = {
      full_name: data.fullname,
      email: data.email,
      password: data.password,
    };

    await registerUser.mutateAsync(request);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label.Root htmlFor="fullname">NAMA LENGKAP</Label.Root>
        <Input.Root hasError={!!errors.fullname}>
          <Input.Wrapper>
            <Input.Input
              id="fullname"
              type="text"
              placeholder="John Doe"
              {...register("fullname")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="email">EMAIL</Label.Root>
        <Input.Root hasError={!!errors.email}>
          <Input.Wrapper>
            <Input.Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              {...register("email")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="password">PASSWORD</Label.Root>
        <Input.Root hasError={!!errors.password}>
          <Input.Wrapper>
            <Input.Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="******"
              {...register("password")}
            />
            <Input.InlineAffix>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center p-1 text-text-soft-400 hover:text-text-sub-600 transition-colors"
              >
                {showPassword ? (
                  <RiEyeOffLine className="size-5" />
                ) : (
                  <RiEyeLine className="size-5" />
                )}
              </button>
            </Input.InlineAffix>
          </Input.Wrapper>
        </Input.Root>
      </div>
      <div className="space-y-2">
        <button
          type="submit"
          disabled={registerUser.isPending}
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          {registerUser.isPending ? "Loading..." : "Daftar"}
        </button>
      </div>
    </form>
  );
};
