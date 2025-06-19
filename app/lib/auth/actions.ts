"use server";

import { lucia, validateRequest } from "./lucia";
import { generateId } from "lucia";
import { PrismaClient } from "@prisma/client";
import { hash as bcryptHash, compare } from "bcryptjs";
import { cookies } from "next/headers";
import { z } from "zod";

const prisma = new PrismaClient();

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export async function login(formData: FormData): Promise<{ error?: string; success?: boolean }> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: result.data.email.toLowerCase() }
    });

    if (!existingUser) {
      return { error: "Invalid credentials" };
    }

    const validPassword = await compare(result.data.password, existingUser.passwordHash);

    if (!validPassword) {
      return { error: "Invalid credentials" };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An error occurred during login" };
  }
}

export async function register(formData: FormData): Promise<{ error?: string; success?: boolean }> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    const result = registerSchema.safeParse({ email, password, firstName, lastName });
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    // Using bcryptjs with a cost factor of 12 (recommended secure default)
    const hashedPassword = await bcryptHash(result.data.password, 12);

    const userId = generateId(15);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: result.data.email.toLowerCase() }
    });

    if (existingUser) {
      return { error: "User with this email already exists" };
    }

    // Create new user
    try {
      await prisma.user.create({
        data: {
          id: userId,
          email: result.data.email.toLowerCase(),
          passwordHash: hashedPassword,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          role: "REP", // Default role
        }
      });
    } catch (dbError) {
      console.error("Database error during user creation:", dbError);
      if (dbError instanceof Error) {
        return { error: `Database error: ${dbError.message}` };
      }
      return { error: "Failed to create user account" };
    }

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof Error) {
      return { error: `Registration failed: ${error.message}` };
    }
    return { error: "An error occurred during registration" };
  }
}

export async function logout(): Promise<{ error?: string; success?: boolean }> {
  try {
    const { session } = await validateRequest();
    if (!session) {
      return { error: "Unauthorized" };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { error: "An error occurred during logout" };
  }
}

export async function getUser() {
  const { user } = await validateRequest();
  return user;
}
