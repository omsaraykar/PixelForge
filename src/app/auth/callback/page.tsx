"use client"
import { useEffect } from "react"

export default function CallbackPage() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ type: "auth-complete" }, "*")
      window.close()
    }
  }, [])

  return <p className="text-center mt-6">Finishing sign-in…</p>
}
