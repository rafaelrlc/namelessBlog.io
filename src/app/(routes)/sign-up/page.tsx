import React from "react";
import SignUpForm from "@/app/components/form/SignUpForm";
import { Label } from "@/app/components/ui/label";
const SingUp = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Label className="text-2xl font-bold mb-4">Registre-se</Label>
      <SignUpForm />
    </div>
  );
};

export default SingUp;
