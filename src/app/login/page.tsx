'use client'

import { SignIn } from "@clerk/nextjs"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "btn btn-primary w-full",
              formFieldInput: "input input-bordered w-full",
              socialButtonsBlockButton: "btn btn-outline w-full gap-2",
              card: "bg-white shadow-2xl rounded-xl p-8",
              headerTitle: "text-2xl font-bold text-center",
              headerSubtitle: "text-gray-600 text-center",
              dividerLine: "bg-gray-200",
              dividerText: "text-gray-500 bg-white px-2",
              formFieldLabel: "text-gray-700",
              footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
              socialButtonsProviderIcon: "w-5 h-5",
              socialButtonsBlockButtonText: "flex-1",
            },
            layout: {
              socialButtonsPlacement: "bottom",
              privacyPageUrl: "https://clerk.dev/privacy",
              termsPageUrl: "https://clerk.dev/terms",
            }
          }}
        />
      </div>
    </div>
  )
} 