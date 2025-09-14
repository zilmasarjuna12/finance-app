import { Link } from "@tanstack/react-router";

import BackgroundGreen from "@/assets/background.svg";

import {
  RiAccountBoxLine,
  RiArrowLeftSLine,
  RiBarChart2Line,
  RiHome2Line,
  RiNotification2Line,
  RiWallet2Line,
} from "@remixicon/react";
import { TransactionCreateForm } from "../components/transaction-create-form";

export const TransactionCreateContainer = () => {
  return (
    <div className="min-h-screen overflow-auto max-h-screen">
      <img src={BackgroundGreen} alt="background" className="w-full" />
      <div className="flex z-1 relative px-6 text-white -mt-65">
        <div className="flex-none">
          <Link to="..">
            <RiArrowLeftSLine />
          </Link>
        </div>
        <div className="grow text-center text-[18px] font-[400]">Wallet</div>
        <div className="flex-none">
          <RiNotification2Line />
        </div>
      </div>
      <div className="px-8 z-1 relative">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-20">
          <TransactionCreateForm />
        </div>
      </div>
      <div className="fixed max-w-md mx-auto bottom-0 left-0 right-0 bg-white px-10 py-4 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <RiHome2Line className="text-gray-600" />
          </div>
          <div className="flex flex-col items-center">
            <RiBarChart2Line className="text-gray-600" />
          </div>
          <div className="flex flex-col items-center">
            <RiWallet2Line className="text-[#408782]" />
          </div>
          <div className="flex flex-col items-center">
            <RiAccountBoxLine className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};
