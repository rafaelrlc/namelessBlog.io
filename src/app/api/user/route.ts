import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  name: z.string().min(1, "Name is required").max(100),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, name } = userSchema.parse(body);

    const existingUserEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "Email already exists",
        },
        { status: 409 }
      );
    }

    const existingUsername = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "Username already exists",
        },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        name,
      },
    });

    const { password: _, ...user } = newUser;
    return NextResponse.json(
      {
        user: user,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        user: null,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
