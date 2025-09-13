import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as Label from "@/components/ui/label";
import * as Input from "@/components/ui/input";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

import { type LoginFormData, loginSchema } from "../schemas/login";
import { useAuth } from "../hooks/use-auth";

import { LoginRequest } from "../types";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const request: LoginRequest = {
      email: data.email,
      password: data.password,
    };

    await login.mutateAsync(request);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
          disabled={login.isPending}
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          {login.isPending ? "Loading..." : "Masuk"}
        </button>
      </div>
    </form>
  );
};
