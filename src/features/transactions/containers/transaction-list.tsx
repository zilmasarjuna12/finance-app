import { Link } from "@tanstack/react-router";

import BackgroundGreen from "@/assets/background.svg";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBarChart2Line,
  RiExchangeDollarLine,
  RiHome2Line,
  RiNotification2Line,
  RiShoppingBag4Line,
  RiWallet2Line,
} from "@remixicon/react";
import { useTransactions } from "../hooks/use-transaction";

export const TransactionListContainer = () => {
  const { data: transactions, isLoading } = useTransactions();

  // const formatDate = (timestamp: number) => {
  //   return new Date(timestamp * 1000).toLocaleDateString("en-US", {
  //     month: "short",
  //     day: "numeric",
  //     year: "numeric",
  //   });
  // };

  const formatAmount = (amount: number, type: string) => {
    const sign = type === "income" ? "+" : "-";
    return `${sign}$${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen overflow-y-auto max-h-screen scrollbar-hide">
      <img src={BackgroundGreen} alt="background" className="w-full" />
      <div className="flex z-1 relative px-6 text-white -mt-65">
        <div className="flex-none">
          <Link to="..">
            <RiArrowLeftSLine />
          </Link>
        </div>
        <div className="grow text-center text-[18px] font-[400]">
          Transaction
        </div>
        <div className="flex-none">
          <RiNotification2Line />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-[25px] mt-20 p-7 pb-30 relative min-h-screen">
        <div className="mt-2">
          <div className="space-y-7">
            {isLoading && (
              <div className="space-y-7 animate-pulse">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                    <div className="flex flex-col text-right">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!isLoading && transactions && transactions.length === 0 && (
              <div className="text-center text-gray-500">
                No transactions available.
              </div>
            )}
            {!isLoading && transactions && transactions.length > 0 && (
              <div className="space-y-7">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between transition-all duration-200 ease-out hover:px-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <RiExchangeDollarLine />
                      </div>
                      <div>
                        <p className="font-[500] text-[14px] text-[#222222]">
                          {transaction.note}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          {/* {formatDate(transaction.transcation_date)} */}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <p
                        className={`font-[600] text-[14px] ${transaction.type === "income" ? "text-green-600" : "text-[#FF5C5C]"}`}
                      >
                        {formatAmount(transaction.amount, transaction.type)}
                      </p>
                      <RiArrowRightSLine />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-2">
        <Link
          to="/main/transactions/create"
          className="w-14 h-14 bg-[#408782] rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>
      </div>
      <div className="fixed max-w-md mx-auto bottom-0 left-0 right-0 bg-white px-10 py-4 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <Link to="/main" className="flex flex-col items-center">
            <RiHome2Line className="text-gray-600" />
          </Link>
          <Link to="/main/transactions" className="flex flex-col items-center">
            <RiBarChart2Line className="text-[#408782]" />
          </Link>
          <div className="flex flex-col items-center">
            {/* Space for the floating button */}
          </div>
          <Link to="/main/wallets" className="flex flex-col items-center">
            <RiWallet2Line className=" text-gray-600" />
          </Link>
          <Link to="/main/budgets" className="flex flex-col items-center">
            <RiShoppingBag4Line className="text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};
