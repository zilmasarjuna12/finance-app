import BackgroundGreen from "@/assets/background.svg";

import {
  RiAccountBoxLine,
  RiArrowLeftSLine,
  RiBarChart2Line,
  RiHome2Line,
  RiNotification2Line,
  RiWallet2Line,
} from "@remixicon/react";

import * as Label from "@/components/ui/label";
import * as Input from "@/components/ui/input";

export const WalletCreateContainer = () => {
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
      <div className="px-8 z-1 relative">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-20">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label.Root>NAMA</Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama wallet"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>
            <div className="space-y-2">
              <Label.Root>Jumlah</Label.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.InlineAffix>Rp</Input.InlineAffix>
                  <Input.Input
                    id="amount"
                    type="text"
                    placeholder="Masukkan jumlah"
                  />
                </Input.Wrapper>
              </Input.Root>
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
              >
                Tambah
              </button>
            </div>
          </form>
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
