import { z } from "zod";

export const createWalletSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  type: z.string().min(1, "Tipe wajib dipilih"),
  balance: z.string().min(1, "Jumlah wajib diisi"),
});

export type CreateWalletFormData = z.infer<typeof createWalletSchema>;
