'use client'

import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function MainNavbar() {
  const { isSignedIn } = useUser();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Uiverse
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <ThemeToggle />
        {isSignedIn ? (
          <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}
          />
        ) : (
          <SignInButton mode="modal">
            <button className="btn btn-primary">Sign In</button>
          </SignInButton>
        )}
      </div>
    </div>
  );
} 