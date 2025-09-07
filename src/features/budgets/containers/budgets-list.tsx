import * as SegmentedControl from "@/components/ui/segmented-control";

import {
  RiAccountBoxLine,
  RiArrowLeftSLine,
  RiBarChart2Line,
  RiHome2Line,
  RiNotification2Line,
  RiWallet2Line,
} from "@remixicon/react";

import BackgroundGreen from "@/assets/background.svg";

export const BudgetsListContainer = () => {
  return (
    <div className="min-h-screen overflow-y-auto max-h-screen scrollbar-hide">
      <img src={BackgroundGreen} alt="background" className="w-full" />
      <div className="flex z-1 relative px-6 text-white -mt-65">
        <div className="flex-none ...">
          <RiArrowLeftSLine />
        </div>
        <div className="grow text-center text-[18px] font-[400]">Budget</div>
        <div className="flex-none">
          <RiNotification2Line />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-[25px] mt-20 p-7 pb-30 relative min-h-screen">
        <div className="mt-2">
          <SegmentedControl.Root defaultValue="expense">
            <SegmentedControl.List>
              <SegmentedControl.Trigger value="expense">
                Pengeluaran
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="income">
                Pemasukan
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
            <SegmentedControl.Content value="expense" className="mt-8 px-2">
              <div className="space-y-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-[14px] text-[#222222]">
                      Makan & Minum
                    </p>
                    <p className="text-[12px] text-gray-500">food</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="font-[600] text-[14px] text-[#222222]">
                      Rp 1.000.000
                    </p>
                    <p className="text-[12px] text-gray-500">Rp 10.000</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-[14px] text-[#222222]">
                      Transportasi
                    </p>
                    <p className="text-[12px] text-gray-500">entertainment</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="font-[600] text-[14px] text-[#222222]t">
                      Rp 200.000
                    </p>
                    <p className="text-[12px] text-gray-500t">Rp 10.000</p>
                  </div>
                </div>
              </div>
            </SegmentedControl.Content>
            <SegmentedControl.Content value="income" className="mt-8 px-2">
              <div className="space-y-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-[14px] text-[#222222]">
                      Gaji Bulanan
                    </p>
                    <p className="text-[12px] text-gray-500">salary</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="font-[600] text-[14px] text-[#222222]">
                      Rp 3.000.000
                    </p>
                    <p className="text-[12px] text-gray-500">Rp 3.000.000</p>
                  </div>
                </div>
              </div>
            </SegmentedControl.Content>
          </SegmentedControl.Root>
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
