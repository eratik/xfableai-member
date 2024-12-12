import React from "react";
import { Lock, Mail } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

const GradientText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

const SignInForm = () => {
  const { signIn } = useAuthActions();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      await signIn("password", formData);
      // Handle successful sign-in (e.g., redirect or show a success message)
    } catch (error) {
      // Handle sign-in error (e.g., show an error message)
      console.error("Sign-in failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-pulse" />

      <div className="relative max-w-md mx-auto p-6">
        {/* Main content */}
        <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 border border-secondary/20 rounded-xl p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <GradientText>Welcome Back</GradientText>
            </h1>
            <p className="text-secondary">Continue your fantasy journey</p>
          </div>

          {/* Sign in form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email field */}
              <div>
                <label className="block text-sm text-secondary mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-secondary" />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="block text-sm text-secondary mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-secondary" />
                </div>
              </div>
            </div>

            {/* Forgot password link */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                Forgot your password?
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 rounded-lg
                bg-gradient-to-r from-primary to-secondary
                hover:from-primary/90 hover:to-secondary/90
                text-white font-bold
                flex items-center justify-center
                transition-all duration-300
                ${loading ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Sign up link */}
            <div className="text-center text-secondary">
              <span>Don't have an account? </span>
              <button
                type="button"
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/* Security note */}
        <div className="mt-6 text-center text-sm text-secondary">
          <div className="flex items-center justify-center">
            <Lock className="w-4 h-4 mr-1" />
            <span>Secure, encrypted connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
