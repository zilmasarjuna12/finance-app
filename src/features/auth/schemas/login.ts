import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Silakan masukkan alamat email yang valid"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password harus terdiri dari minimal 6 karakter"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
