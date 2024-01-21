import SignInForm from '@/app/components/form/SignInForm'
import { Label } from '@/app/components/ui/label'

export default function LoginForm() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
      <Label className="mb-4 text-2xl font-bold">Login</Label>
      <SignInForm />
    </div>
  )
}
