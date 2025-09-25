"use client"

import { useEffect } from "react"

export default function SignInPage() {
  const openPopup = (provider: string) => {
    const width = 500
    const height = 600
    const left = window.innerWidth / 2 - width / 2
    const top = window.innerHeight / 2 - height / 2

    window.open(
      `/api/auth/signin/${provider}`,
      "SignIn",
      `width=${width},height=${height},top=${top},left=${left}`
    )
  }

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.type === "auth-complete") {
        // ✅ user signed in → refresh session
        window.location.reload()
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Sign in</h1>

      <button
        type="button"
        onClick={() => openPopup("google")}
        className="p-3 bg-red-500 text-white rounded mb-3"
      >
        Sign in with Google
      </button>

      <button
        type="button"
        onClick={() => openPopup("github")}
        className="p-3 bg-gray-800 text-white rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}
