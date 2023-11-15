import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useToast } from "../components/ui/use-toast";
import { LoginSchema, SignUpSchema } from "../lib/schemas";

export const useAuthService = () => {
  const { push } = useRouter();
  const { toast } = useToast();

  const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    push("/");
  };

  const register = async (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
    push("/sign-in");
  };

  return { login, register };
};
