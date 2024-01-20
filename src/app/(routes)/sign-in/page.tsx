import SignInForm from "@/app/components/form/SignInForm";
import { Label } from "@/app/components/ui/label";

export default function LoginForm() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center max-w-xl">
      <Label className="text-2xl font-bold mb-4">Login</Label>
      <SignInForm />
    </div>
  );
}
