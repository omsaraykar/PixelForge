"use client"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

export function SessionWatcher() {
  const { data: session, update } = useSession()

  useEffect(() => {
    // listen when popup closes and refresh session
    const timer = setInterval(() => update(), 2000)
    return () => clearInterval(timer)
  }, [update])

  return null
}
