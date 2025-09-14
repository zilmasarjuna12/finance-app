import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Select from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCreateBudget } from "../hooks/use-budget";
import { CreateBudgetFormData, createBudgetSchema } from "../schemas";
import { BudgetCreateRequest } from "../types";

export const BudgetCreateForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateBudgetFormData>({
    resolver: zodResolver(createBudgetSchema),
  });

  const createBudget = useCreateBudget();

  const onSubmit = async (data: CreateBudgetFormData) => {
    console.log(data);

    const request: BudgetCreateRequest = {
      name: data.name,
      type: data.type,
      category: data.category,
      amount: parseInt(data.amount, 10),
    };

    await createBudget.mutate(request);
  };

  const handleChangeType = (value: "expense" | "income") => {
    setValue("type", value, { shouldValidate: true });
    setValue("category", "", { shouldValidate: true });
  };

  const handleChangeCategory = (value: string) => {
    setValue("category", value, { shouldValidate: true });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label.Root htmlFor="name">NAMA</Label.Root>
        <Input.Root hasError={!!errors.name}>
          <Input.Wrapper>
            <Input.Input
              id="name"
              type="text"
              placeholder="Masukkan nama budget"
              {...register("name")}
            />
          </Input.Wrapper>
        </Input.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="type">TIPE</Label.Root>
        <Select.Root value={watch("type")} onValueChange={handleChangeType}>
          <Select.Trigger>
            <Select.Value placeholder="Pilih tipe budget" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="expense">Pengeluaran</Select.Item>
            <Select.Item value="income">Pemasukan</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="category">KATEGORI</Label.Root>
        <Select.Root
          value={watch("category")}
          onValueChange={handleChangeCategory}
        >
          <Select.Trigger>
            <Select.Value placeholder="Pilih kategori" />
          </Select.Trigger>
          <Select.Content>
            {watch("type") === "expense" ? (
              <>
                <Select.Item value="makanan">Makanan</Select.Item>
                <Select.Item value="transportasi">Transportasi</Select.Item>
                <Select.Item value="hiburan">Hiburan</Select.Item>
                <Select.Item value="kesehatan">Kesehatan</Select.Item>
                <Select.Item value="belanja">Belanja</Select.Item>
                <Select.Item value="tagihan">Tagihan</Select.Item>
                <Select.Item value="lainnya">Lainnya</Select.Item>
              </>
            ) : (
              <>
                <Select.Item value="gaji">Gaji</Select.Item>
                <Select.Item value="bonus">Bonus</Select.Item>
                <Select.Item value="lainnya">Lainnya</Select.Item>
              </>
            )}
          </Select.Content>
        </Select.Root>
      </div>
      <div className="space-y-2">
        <Label.Root htmlFor="amount">Jumlah</Label.Root>
        <Input.Root>
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
        <button
          type="submit"
          disabled={createBudget.isPending}
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          {createBudget.isPending ? "Loading..." : "Tambah"}
        </button>
      </div>
    </form>
  );
};
