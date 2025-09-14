import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Select from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateWallet } from "../hooks/use-wallet";
import { CreateWalletFormData, createWalletSchema } from "../schemas";
import type { WalletCreateRequest } from "../types";

export const WalletCreateForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateWalletFormData>({
    resolver: zodResolver(createWalletSchema),
  });

  const createWallet = useCreateWallet();

  const onSubmit = async (data: CreateWalletFormData) => {
    console.log("submit", data);

    const request: WalletCreateRequest = {
      name: data.name,
      type: data.type,
      currency: "IDR",
      balance: parseInt(data.balance, 10),
    };

    await createWallet.mutateAsync(request);
  };

  const handleChangeType = (value: string) => {
    setValue("type", value, { shouldValidate: true });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label.Root htmlFor="name">NAMA</Label.Root>
        <Input.Root>
          <Input.Wrapper>
            <Input.Input
              id="name"
              type="text"
              placeholder="Masukkan nama wallet"
              {...register("name")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="type">TIPE</Label.Root>
        <Select.Root value={watch("type")} onValueChange={handleChangeType}>
          <Select.Trigger>
            <Select.Value placeholder="Pilih tipe" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="ovo">OVO</Select.Item>
            <Select.Item value="dana">DANA</Select.Item>
            <Select.Item value="gopay">GOPAY</Select.Item>
            <Select.Item value="bank-bca">BANK BCA</Select.Item>
            <Select.Item value="bank-mandiri">BANK MANDIRI</Select.Item>
            <Select.Item value="bank-bri">BANK BRI</Select.Item>
            <Select.Item value="bank-cimb">BANK CIMB</Select.Item>
          </Select.Content>
        </Select.Root>
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
              {...register("balance")}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");

                setValue("balance", numericValue, { shouldValidate: true });
              }}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={createWallet.isPending}
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          {createWallet.isPending ? "Loading..." : "Tambah"}
        </button>
      </div>
    </form>
  );
};
