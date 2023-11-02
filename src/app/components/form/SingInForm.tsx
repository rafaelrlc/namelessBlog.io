"use client";

import { useForm } from "react-hook-form";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
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

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-2xl">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Insira sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Login
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full max-w-2xl items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        ou
      </div>
      <div className="grid grid-cols-2 w-full max-w-2xl gap-3">
        <Button className="w-full max-w-3xl flex gap-2" variant="blue">
          <span>Continue com Google</span>
          <AiOutlineGoogle size={25} />
        </Button>
        <Button className="w-full max-w-3xl flex gap-2 bg-indigo-500 hover:bg-indigo-600">
          <span>Continue com Github</span>
          <AiFillGithub size={25} />
        </Button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-2">
        Não possui uma conta?&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Registre-se
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
