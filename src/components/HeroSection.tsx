'use client'

import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function HeroSection() {
  const { isSignedIn } = useUser();

  return (
    <div className="hero min-h-[calc(100vh-4rem)] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">Welcome to UI Universe</h1>
          <p className="py-6">
            Discover and share stunning UI components for your web and mobile
            applications. From beautiful buttons to responsive layouts,
            everything you need in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={isSignedIn ? "/dashboard" : "/login"} className="btn btn-primary">
              Get Started
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "/login"} className="btn btn-outline">
              Learn More
            </Link>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title justify-center">Easy to Use</h2>
                <p>
                  Simple and intuitive interface for the best user experience
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title justify-center">Secure</h2>
                <p>
                  Your data is protected with the latest security measures
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title justify-center">Fast</h2>
                <p>Lightning fast performance for smooth operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 