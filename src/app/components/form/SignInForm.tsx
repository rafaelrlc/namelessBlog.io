'use client'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
import { LoginSchema } from '@/app/lib/schemas/auth-schemas'
import { AuthService } from '@/app/services/auth-service'

const SignInForm = () => {
  const { login } = AuthService()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    await login(values)
  }

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
        <Button className="mt-6 w-full" type="submit">
          Login
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full max-w-2xl items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        ou
      </div>
      <div className="grid w-full max-w-2xl grid-cols-2 gap-3">
        <Button className="flex w-full max-w-3xl gap-2" variant="blue">
          <span>Continue com Google</span>
          <AiOutlineGoogle size={25} />
        </Button>
        <Button className="flex w-full max-w-3xl gap-2 bg-indigo-500 hover:bg-indigo-600">
          <span>Continue com Github</span>
          <AiFillGithub size={25} />
        </Button>
      </div>

      <p className="mt-2 text-center text-sm text-gray-600">
        Não possui uma conta?&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Registre-se
        </Link>
      </p>
    </Form>
  )
}

export default SignInForm
