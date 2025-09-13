import { Link } from "@tanstack/react-router";

import BackgroundGreen from "@/assets/background.svg";

import { RegisterForm } from "../components/register-form";

export const RegisterContainer = () => {
  return (
    <div className="min-h-screen">
      <img src={BackgroundGreen} alt="onboarding" className="w-full" />
      <div className="px-8 z-1 relative">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 -mt-15">
          <RegisterForm />
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
