"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password }); // Replace with API call
  };

  const handleOAuth = (provider: "google" | "github") => {
    console.log(`Signup with ${provider}`); // Replace with real OAuth flow
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground focus:ring focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>

      {/* OAuth Buttons */}
      <div className="mt-6 space-y-3">
        <button
          onClick={() => handleOAuth("google")}
          className="w-full py-2 rounded-lg border border-foreground/20 flex items-center justify-center gap-2 hover:bg-foreground/10 transition"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <button
          onClick={() => handleOAuth("github")}
          className="w-full py-2 rounded-lg border border-foreground/20 flex items-center justify-center gap-2 hover:bg-foreground/10 transition"
        >
          <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
          Continue with GitHub
        </button>
      </div>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link href="/login" className="underline text-foreground/80 hover:text-foreground">
          Login
        </Link>
      </p>
    </div>
  );
}
