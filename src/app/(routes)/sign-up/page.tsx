import React from 'react'
import SignUpForm from '@/app/components/form/SignUpForm'
import { Label } from '@/app/components/ui/label'
const SingUp = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Label className="mb-4 text-2xl font-bold">Registre-se</Label>
      <SignUpForm />
    </div>
  )
}

export default SingUp
