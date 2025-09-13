import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .min(1, "Nama Lengkap wajib diisi")
    .max(100, "Nama tidak boleh lebih dari 100 karakter")
    .trim(),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Silakan masukkan alamat email yang valid")
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password harus terdiri dari minimal 6 karakter")
    .max(100, "Password tidak boleh lebih dari 100 karakter"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
