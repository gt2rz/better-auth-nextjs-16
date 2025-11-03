"use server";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function getCurrentSession() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session;
}

export const signUpEmail = async ({ name, email, password }: { name: string, email: string, password: string }) => {
  const data = await auth.api.signUpEmail({
    body: {
        name,
        email,
        password,
        // callbackURL: "https://example.com/callback",
    }
  });
  return data;
};

export const signInEmail = async ({ email, password, rememberMe = false }: { email: string, password: string, rememberMe?: boolean }) => {
  const data = await auth.api.signInEmail({
    body: {
        email,
        password,
        rememberMe,
        // callbackURL: "https://example.com/callback",
    },
    headers: await headers(),
});
  return data;
};

export const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/sign-in");
      },
    },
  });
};