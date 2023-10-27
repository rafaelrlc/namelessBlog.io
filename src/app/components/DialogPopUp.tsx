import React, { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";

interface DialogPopUpProps {
  dialogTrigger: ReactNode;
  dialogStyles?: string | "";
  dialogDescription?: string | "";
  dialogTitle?: string | "";
  dialogConfirm?: () => void;
  dialogCancel?: () => void;
}

const DialogPopUp = ({
  dialogTrigger,
  dialogStyles,
  dialogDescription,
  dialogTitle,
  dialogCancel,
  dialogConfirm,
}: DialogPopUpProps) => {
  return (
    <div className={dialogStyles}>
      <AlertDialog>
        <AlertDialogTrigger asChild>{dialogTrigger}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={dialogCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={dialogConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogPopUp;
