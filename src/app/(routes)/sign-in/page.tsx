import SignInForm from "@/app/components/form/SingInForm";
import { Label } from "@/app/components/ui/label";
export default function LoginForm() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Label className="text-2xl font-bold mb-4">Login</Label>
      <SignInForm />
    </div>
  );
}
