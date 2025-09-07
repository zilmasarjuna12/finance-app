import { useState } from "react";

import * as Label from "@/components/ui/label";
import * as Input from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

import BackgroundGreen from "@/assets/background.svg";

export const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen">
      <img src={BackgroundGreen} alt="onboarding" className="w-full" />
      <div className="px-8 z-1 relative">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 -mt-15">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label.Root>NAMA LENGKAP</Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className="space-y-2">
              <Label.Root>EMAIL</Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className="space-y-2">
              <Label.Root>PASSWORD</Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
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
                className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
              >
                Daftar
              </button>
            </div>
          </form>
        </div>

        <p className="relative text-sm text-center mt-5 text-[#444444]">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-[#438883]">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};
