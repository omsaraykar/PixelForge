import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md bg-background border border-foreground/20">
        {children}
      </div>
    </div>
  );
}
