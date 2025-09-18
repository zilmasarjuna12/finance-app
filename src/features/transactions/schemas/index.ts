import { z } from "zod";

export const createTransactionSchema = z.object({
  type: z.enum(["expense", "income"], {
    error: () => ({ message: "Tipe wajib dipilih" }),
  }),
  amount: z.string().min(1, "Jumlah wajib diisi"),
  budget: z.string().min(1, "Budget wajib dipilih"),
  wallet: z.string().min(1, "Wallet wajib dipilih"),
  note: z.string().optional(),
  transaction_date: z.string().min(1, "Tanggal wajib diisi"),
});

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>;
