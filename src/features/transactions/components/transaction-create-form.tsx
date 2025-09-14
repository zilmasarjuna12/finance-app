import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Select from "@/components/ui/select";

export const TransactionCreateForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <Label.Root>WALLET</Label.Root>
        <Select.Root>
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
        <Label.Root htmlFor="note">TIPE</Label.Root>
        <Select.Root>
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
        <Label.Root htmlFor="note">BUDGET</Label.Root>
        <Select.Root>
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
        <Label.Root htmlFor="amount">NOMINAL</Label.Root>
        <Input.Root>
          <Input.Wrapper>
            <Input.Input
              id="amount"
              type="text"
              placeholder="Masukkan nominal transaksi"
            />
          </Input.Wrapper>
        </Input.Root>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          className="mt-2 relative bg-gradient-to-b to-[#3E7C78] from-[#69AEA9] text-white px-20 py-3 rounded-full font-semibold hover:shadow-xl transition trantions-duration-600 w-full"
        >
          Tambah Transaksi
        </button>
      </div>
    </form>
  );
};
