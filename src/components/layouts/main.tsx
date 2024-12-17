import { Menu, LogOut, User } from "lucide-react";
import { GradientText, ThemedButton } from "@/components/ui/themed";
import { Outlet, Link } from "react-router-dom";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const { signOut } = useAuthActions();
  const user = useQuery(api.auth.currentUser);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-secondary/20">
      <div className="container px-4 h-16 flex items-center max-w-screen-2xl mx-auto">
        <Link to="/" className="mr-auto">
          <GradientText className="font-bold text-xl">xfable.ai</GradientText>
        </Link>

        <div className="relative ml-auto">
          <ThemedButton
            variant="outline"
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            <Menu className="h-6 w-6" />
          </ThemedButton>

          {/* Dropdown Menu */}
          <div
            className={cn(
              "absolute right-0 mt-2 min-w-[12rem] w-max rounded-md shadow-lg bg-background border border-secondary/20 backdrop-blur-sm",
              "transition-all duration-200 ease-in-out",
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            <div className="py-1">
              <Authenticated>
                <div className="px-4 py-2 border-b border-secondary/20">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm truncate">
                      {user?.email || "Profile"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-secondary/10 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </Authenticated>

              <Unauthenticated>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-sm hover:bg-secondary/10"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Unauthenticated>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
    </div>
  );
};
