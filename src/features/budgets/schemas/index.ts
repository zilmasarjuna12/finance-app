import { z } from "zod";

export const createBudgetSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  type: z.enum(["expense", "income"], {
    error: () => ({ message: "Tipe wajib dipilih" }),
  }),
  category: z.string().min(1, "Kategori wajib dipilih"),
  amount: z.string().min(1, "Jumlah wajib diisi"),
});

export type CreateBudgetFormData = z.infer<typeof createBudgetSchema>;
