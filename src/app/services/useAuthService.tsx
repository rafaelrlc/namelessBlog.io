import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useToast } from "../components/ui/use-toast";
import { LoginSchema, SignUpSchema } from "../lib/schemas";

export const useAuthService = () => {
  const { push } = useRouter();
  const { toast } = useToast();

  const login = async (values: z.infer<typeof LoginSchema>) => {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    console.log(response);

    if (response?.error) {
      toast({
        title: "Credenciais inválidas",
        description: "Ocorreu um erro ao tentar fazer login.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login realizado com sucesso",
        description: "Você será redirecionado em breve.",
        variant: "accept",
      });
      push("/");
    }
  };

  const register = async (values: z.infer<typeof SignUpSchema>) => {
    const response = await fetch("api/user", {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
        name: values.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      push("/sign-in");
      console.log(response);
    } else {
      toast({
        title: "Erro ao criar conta",
        description: "Ocorreu um erro ao tentar criar sua conta.",
        variant: "destructive",
      });
    }
  };

  return { login, register };
};
