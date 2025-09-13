import { Link } from "@tanstack/react-router";

import BackgroundGreen from "@/assets/background.svg";

import { LoginForm } from "../components/login-form";

export const LoginContainer = () => {
  return (
    <div className="min-h-screen">
      <img src={BackgroundGreen} alt="onboarding" className="w-full" />
      <div className="px-8 z-1 relative">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 -mt-15">
          <LoginForm />
        </div>

        <p className="relative text-sm text-center mt-5 text-[#444444]">
          Belum punya akun?{" "}
          <Link to="/register" className="text-[#438883]">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};
