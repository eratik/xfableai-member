import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CreditCard, ArrowLeft } from "lucide-react";

// Define the interface for the selectedPlan prop
interface SelectedPlan {
  name: string;
  price: string;
}

interface PaymentFormProps {
  selectedPlan?: SelectedPlan;
  onBack: () => void;
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

const PaymentForm: React.FC<PaymentFormProps> = ({ selectedPlan }) => {
  const navigate = useNavigate();

  if (!selectedPlan) {
    return <div>Please select a plan first.</div>;
  }

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock payment processing
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-pulse" />

      <div className="relative max-w-2xl mx-auto p-6">
        {/* Back button */}
        <button
          onClick={() => navigate("/subscribe")}
          className="flex items-center text-secondary hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Change Plan
        </button>

        {/* Main content */}
        <div className="backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 border border-secondary/20 rounded-xl p-6">
          {/* Order summary */}
          <div className="mb-8 pb-6 border-b border-secondary/20">
            <h1 className="text-2xl font-bold mb-4">
              <GradientText>Complete Your Subscription</GradientText>
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">
                  {selectedPlan?.name || "Adventure Plus"}
                </h2>
                <p className="text-sm text-secondary">Monthly Subscription</p>
              </div>
              <GradientText className="text-xl font-bold">
                {selectedPlan?.price || "$19.99"}
              </GradientText>
            </div>
          </div>

          {/* Payment form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card details section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Card Details</h3>
                <CreditCard className="w-5 h-5 text-secondary" />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-secondary mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-secondary mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-secondary mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing info section */}
            <div className="space-y-4">
              <h3 className="font-semibold">Billing Information</h3>
              <div>
                <label className="block text-sm text-secondary mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-secondary mb-1">
                    Country
                  </label>
                  <select className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="12345"
                    className="w-full px-4 py-2 bg-background border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Terms and subscribe button */}
            <div className="space-y-6">
              <div className="text-sm text-secondary">
                <p className="mb-2">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy. Your subscription will renew automatically at{" "}
                  {selectedPlan?.price || "$19.99"}/month.
                </p>
                <p>
                  You can cancel anytime through your account settings or
                  customer support.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full py-4 rounded-lg
                  bg-gradient-to-r from-primary to-secondary
                  hover:from-primary/90 hover:to-secondary/90
                  text-white font-bold
                  flex items-center justify-center
                  transition-all duration-300
                  ${loading ? "opacity-70 cursor-not-allowed" : ""}
                `}
              >
                <Lock className="w-4 h-4 mr-2" />
                {loading ? "Processing..." : "Subscribe Now"}
              </button>
            </div>
          </form>

          {/* Security badges */}
          <div className="mt-6 pt-6 border-t border-secondary/20">
            <div className="flex items-center justify-center space-x-4 text-secondary text-sm">
              <span className="flex items-center">
                <Lock className="w-4 h-4 mr-1" />
                Secure Transaction
              </span>
              <span>256-bit encryption</span>
              <span>PCI Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
