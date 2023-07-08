import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().optional(),
  username: z.string().nonempty().min(3),
  email: z.string().email(),
  password: z.string().nonempty().min(6).max(20),
});

export type TUser = z.infer<typeof UserSchema>;
