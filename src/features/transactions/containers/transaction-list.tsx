import BackgroundGreen from "@/assets/background.svg";

import {
  RiAccountBoxLine,
  RiArrowLeftSLine,
  RiBarChart2Line,
  RiHome2Line,
  RiNotification2Line,
  RiArrowRightSLine,
  RiExchangeDollarLine,
  RiWallet2Line,
} from "@remixicon/react";

const data = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 150.75,
    type: "income",
    category: "salary",
    note: "Dinner at a restaurant",
    transcation_date: 1712345678,
    created_at: 1712345678,
  },
  {
    id: "223e4567-e89b-12d3-a456-426614174001",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 45.2,
    type: "expense",
    category: "food",
    note: "Grocery shopping",
    transcation_date: 1712432078,
    created_at: 1712432078,
  },
  {
    id: "323e4567-e89b-12d3-a456-426614174002",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 2500.0,
    type: "income",
    category: "salary",
    note: "Monthly salary",
    transcation_date: 1712518478,
    created_at: 1712518478,
  },
  {
    id: "423e4567-e89b-12d3-a456-426614174003",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 89.99,
    type: "expense",
    category: "transport",
    note: "Gas station",
    transcation_date: 1712604878,
    created_at: 1712604878,
  },
  {
    id: "523e4567-e89b-12d3-a456-426614174004",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 25.5,
    type: "expense",
    category: "entertainment",
    note: "Movie tickets",
    transcation_date: 1712691278,
    created_at: 1712691278,
  },
  {
    id: "623e4567-e89b-12d3-a456-426614174005",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 120.0,
    type: "expense",
    category: "utilities",
    note: "Electricity bill",
    transcation_date: 1712777678,
    created_at: 1712777678,
  },
  {
    id: "723e4567-e89b-12d3-a456-426614174006",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 500.0,
    type: "income",
    category: "freelance",
    note: "Client project payment",
    transcation_date: 1712864078,
    created_at: 1712864078,
  },
  {
    id: "823e4567-e89b-12d3-a456-426614174007",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 75.3,
    type: "expense",
    category: "shopping",
    note: "Clothing purchase",
    transcation_date: 1712950478,
    created_at: 1712950478,
  },
  {
    id: "923e4567-e89b-12d3-a456-426614174008",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 200.0,
    type: "income",
    category: "gift",
    note: "Birthday gift money",
    transcation_date: 1713036878,
    created_at: 1713036878,
  },
  {
    id: "a23e4567-e89b-12d3-a456-426614174009",
    wallet: {
      id: "a1aea7ec-57f8-4b95-b6c4-77cff913ce8b",
      name: "My Wallet",
      type: "ovo",
      currency: "Rp",
      balance: 1000,
    },
    amount: 35.4,
    type: "expense",
    category: "food",
    note: "Coffee and breakfast",
    transcation_date: 1713123278,
    created_at: 1713123278,
  },
];

export const TransactionListContainer = () => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number, type: string) => {
    const sign = type === "income" ? "+" : "-";
    return `${sign}$${amount.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen overflow-y-auto max-h-screen scrollbar-hide">
      <img src={BackgroundGreen} alt="background" className="w-full" />
      <div className="flex z-1 relative px-6 text-white -mt-65">
        <div className="flex-none ...">
          <RiArrowLeftSLine />
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
            {data.map((transaction) => (
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
                      {formatDate(transaction.transcation_date)}
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
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-2">
        <button className="w-14 h-14 bg-[#408782] rounded-full flex items-center justify-center shadow-lg">
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
        </button>
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
            {/* Space for the floating button */}
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
