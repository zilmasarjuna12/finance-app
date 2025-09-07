import { createFileRoute, Link } from "@tanstack/react-router";

import OnboardingAvatar from "@/assets/onboarding-avatar.svg";
import OnboardingBackground from "@/assets/onboarding-background.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <img src={OnboardingBackground} alt="onboarding" className="w-full" />
      <img
        src={OnboardingAvatar}
        alt="avatar"
        className="absolute top-25"
        loading="eager"
      />
      <h3 className="relative z-10 text-[36px] font-bold text-[#438883] text-center leading-[40px]">
        Spend Smarter <br />
        Save More
      </h3>

      <div className="flex justify-center">
        <Link
          to="/login"
          className="relative z-10 mt-10 bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600"
        >
          Mulai
        </Link>
      </div>
      <p className="relative text-sm text-center mt-2 text-[#444444]">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-[#438883]">
          Masuk
        </Link>
      </p>
    </div>
  );
}
