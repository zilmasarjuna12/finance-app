import BackgroundGreen from "@/assets/background.svg";
import {
  RiAccountBoxLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBarChart2Line,
  RiHome2Line,
  RiNotification2Line,
  RiWallet2Line,
} from "@remixicon/react";

const walletData = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    type: "ovo",
    name: "Main Wallet",
    currency: "IDR",
    balance: 8500000,
    created_at: 1712345678,
    updated_at: 1712345678,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    type: "bri",
    name: "Savings",
    currency: "IDR",
    balance: 4000000,
    created_at: 1712345679,
    updated_at: 1712345679,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174002",
    type: "investment",
    name: "Investment Portfolio",
    currency: "IDR",
    balance: 2500000,
    created_at: 1712345680,
    updated_at: 1712345680,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    type: "gopay",
    name: "GoPay Wallet",
    currency: "IDR",
    balance: 750000,
    created_at: 1712345681,
    updated_at: 1712345681,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174004",
    type: "dana",
    name: "DANA Wallet",
    currency: "IDR",
    balance: 320000,
    created_at: 1712345682,
    updated_at: 1712345682,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174005",
    type: "bca",
    name: "BCA Savings",
    currency: "IDR",
    balance: 15000000,
    created_at: 1712345683,
    updated_at: 1712345683,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174006",
    type: "mandiri",
    name: "Mandiri Account",
    currency: "IDR",
    balance: 6800000,
    created_at: 1712345684,
    updated_at: 1712345684,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174007",
    type: "bni",
    name: "BNI Checking",
    currency: "IDR",
    balance: 1200000,
    created_at: 1712345685,
    updated_at: 1712345685,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174008",
    type: "shopeepay",
    name: "ShopeePay",
    currency: "IDR",
    balance: 450000,
    created_at: 1712345686,
    updated_at: 1712345686,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174009",
    type: "linkaja",
    name: "LinkAja Wallet",
    currency: "IDR",
    balance: 180000,
    created_at: 1712345687,
    updated_at: 1712345687,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174010",
    type: "jenius",
    name: "Jenius Account",
    currency: "IDR",
    balance: 3200000,
    created_at: 1712345688,
    updated_at: 1712345688,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174011",
    type: "permata",
    name: "Permata Savings",
    currency: "IDR",
    balance: 890000,
    created_at: 1712345689,
    updated_at: 1712345689,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174012",
    type: "crypto",
    name: "Crypto Portfolio",
    currency: "USD",
    balance: 2400,
    created_at: 1712345690,
    updated_at: 1712345690,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174013",
    type: "emergency",
    name: "Emergency Fund",
    currency: "IDR",
    balance: 10000000,
    created_at: 1712345691,
    updated_at: 1712345691,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174014",
    type: "business",
    name: "Business Account",
    currency: "IDR",
    balance: 5600000,
    created_at: 1712345692,
    updated_at: 1712345692,
  },
];

export const WalletsListContainer = () => {
  const formatCurrency = (amount: number, currency: string) => {
    if (currency === "IDR") {
      return `Rp ${amount.toLocaleString("id-ID")}`;
    } else if (currency === "USD") {
      return `$${amount.toLocaleString("en-US")}`;
    }
    return `${amount.toLocaleString()}`;
  };

  const getWalletTypeLabel = (type: string) => {
    const typeLabels: { [key: string]: string } = {
      ovo: "OVO",
      bri: "BRI",
      bca: "BCA",
      mandiri: "Mandiri",
      bni: "BNI",
      gopay: "GoPay",
      dana: "DANA",
      shopeepay: "ShopeePay",
      linkaja: "LinkAja",
      jenius: "Jenius",
      permata: "Permata",
      investment: "Long term goals",
      crypto: "Cryptocurrency",
      emergency: "Emergency Fund",
      business: "Business",
    };
    return typeLabels[type] || type.toUpperCase();
  };

  return (
    <div className="min-h-screen overflow-y-auto max-h-screen scrollbar-hide">
      <img src={BackgroundGreen} alt="background" className="w-full" />
      <div className="flex z-1 relative px-6 text-white -mt-65">
        <div className="flex-none ...">
          <RiArrowLeftSLine />
        </div>
        <div className="grow text-center text-[18px] font-[400]">Wallet</div>
        <div className="flex-none">
          <RiNotification2Line />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-[25px] mt-20 p-7 pb-30 relative min-h-screen">
        <div className="mt-2">
          <div className="space-y-7 ">
            {walletData.map((wallet) => (
              <div
                key={wallet.id}
                className="flex items-center cursor-pointer justify-between transition-all duration-200 ease-out hover:px-3"
              >
                <div className="flex items-center gap-3">
                  {/* <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <RiWallet2Line />
                  </div> */}
                  <div>
                    <p className="font-[500] text-[14px] text-[#222222]">
                      {wallet.name}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {getWalletTypeLabel(wallet.type)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-[600] text-[14px] text-[#222222]">
                    {formatCurrency(wallet.balance, wallet.currency)}
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
