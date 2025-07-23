import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});
export type FormLogin = z.infer<typeof schemaLogin>;

export interface SignIn {
  email: string;
  password: string;
}
