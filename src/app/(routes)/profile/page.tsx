"use client";
import React from "react";

import { signOut } from "next-auth/react";
import { Button } from "@/app/components/ui/button";
const ProfilePage = () => {
  return (
    <div>
      <Button
        onClick={() => signOut()}
        style={{ position: "absolute", top: 35, left: 30 }}
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
