import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, name } = body;

    if (!email || !username || !password || !name) {
      return NextResponse.json(
        {
          user: null,
          message: "Please fill in all fields",
        },
        { status: 400 }
      );
    }

    const existingUserEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User already exists",
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

    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
  }
}
