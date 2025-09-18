import { useState } from "react";
import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Select from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateTransactionFormData, createTransactionSchema } from "../schemas";
import { Budget } from "@/features/budgets/types";
import { Wallet } from "@/features/wallets/types";
import { TransactionCreateRequest } from "../types";
import { useCreateTransaction } from "../hooks/use-transaction";

type TransactionCreateFormProps = {
  budgets: Budget[];
  wallets: Wallet[];
};

export const TransactionCreateForm = ({
  budgets,
  wallets,
}: TransactionCreateFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionSchema),
  });

  const createTransaction = useCreateTransaction();

  const handleChangeType = (value: "expense" | "income") => {
    setValue("type", value, { shouldValidate: true });
  };

  const handleChangeWallet = (value: string) => {
    setValue("wallet", value, { shouldValidate: true });
  };

  const handleChangeBudget = (value: string) => {
    setValue("budget", value, { shouldValidate: true });
  };

  const onSubmit = async (data: CreateTransactionFormData) => {
    console.log("Transaction data:", data);

    const request: TransactionCreateRequest = {
      wallet_id: data.wallet,
      type: data.type,
      budget_id: data.budget,
      transaction_date: 1,
      amount: parseInt(data.amount, 10),
      note: data.note || "",
    };

    await createTransaction.mutateAsync(request);
  };

  console.log("Budgets:", budgets);
  console.log("Wallets:", wallets);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label.Root>WALLET</Label.Root>
        <Select.Root
          hasError={!!errors.wallet}
          value={watch("wallet")}
          onValueChange={handleChangeWallet}
        >
          <Select.Trigger>
            <Select.Value placeholder="Pilih wallet" />
          </Select.Trigger>
          <Select.Content>
            {wallets.map((wallet) => (
              <Select.Item key={wallet.id} value={wallet.id}>
                {wallet.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Label.Root>TIPE</Label.Root>
        <Select.Root
          value={watch("type")}
          onValueChange={handleChangeType}
          hasError={!!errors.type}
        >
          <Select.Trigger>
            <Select.Value placeholder="Pilih tipe transaksi" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="expense">Pengeluaran</Select.Item>
            <Select.Item value="income">Pemasukan</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Label.Root>BUDGET</Label.Root>
        <Select.Root
          value={watch("budget")}
          onValueChange={handleChangeBudget}
          hasError={!!errors.budget}
        >
          <Select.Trigger>
            <Select.Value placeholder="Pilih kategori budget" />
          </Select.Trigger>
          <Select.Content>
            {budgets.map((budget) => (
              <Select.Item key={budget.id} value={budget.id}>
                {budget.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Label.Root htmlFor="transaction_date">TANGGAL</Label.Root>
        <Input.Root hasError={!!errors.transaction_date}>
          <Input.Wrapper>
            <Input.Input
              id="transaction_date"
              type="date"
              placeholder="Pilih tanggal transaksi"
              {...register("transaction_date")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className="space-y-2">
        <Label.Root htmlFor="amount">NOMINAL</Label.Root>
        <Input.Root hasError={!!errors.amount}>
          <Input.Wrapper>
            <Input.InlineAffix>Rp</Input.InlineAffix>
            <Input.Input
              id="amount"
              type="text"
              placeholder="Masukkan jumlah"
              {...register("amount")}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "");

                setValue("amount", numericValue, {
                  shouldValidate: true,
                });
              }}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className="space-y-2">
        <Label.Root htmlFor="note">NOTE</Label.Root>
        <Input.Root hasError={!!errors.note}>
          <Input.Wrapper>
            <Input.Input
              id="note"
              type="text"
              placeholder="Masukkan catatan"
              {...register("note")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          {createTransaction.isPending ? "Loading..." : "Tambah Transaksi"}
        </button>
      </div>
    </form>
  );
};
