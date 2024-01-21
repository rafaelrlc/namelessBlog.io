import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { useToast } from '../components/ui/use-toast'
import { LoginSchema, SignUpSchema } from '../lib/schemas/auth-schemas'

export const AuthService = () => {
  const { push } = useRouter()
  const { toast } = useToast()

  const login = async (values: z.infer<typeof LoginSchema>) => {
    push('/')
  }

  const register = async (values: z.infer<typeof SignUpSchema>) => {
    push('/sign-in')
  }

  return { login, register }
}
