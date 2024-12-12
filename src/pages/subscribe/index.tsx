import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  GradientText,
  GradientBackground,
  GlassCard,
} from "@/components/ui/themed";
import { Check, Sparkles } from "lucide-react";

interface SubscribePageProps {
  setSelectedPlan: (plan: { name: string; price: string }) => void;
}

export const SubscribePage: React.FC<SubscribePageProps> = ({
  setSelectedPlan,
}) => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic Fantasy",
      price: "$9.99",
      interval: "month",
      features: [
        "Create 1 custom avatar",
        "100 AI chat messages/month",
        "10 image generations/month",
        "Basic fantasy scenarios",
      ],
      highlight: false,
    },
    {
      name: "Adventure Plus",
      price: "$19.99",
      interval: "month",
      features: [
        "Create 3 custom avatars",
        "Unlimited AI chat messages",
        "50 image generations/month",
        "Advanced fantasy scenarios",
        "Voice chat enabled",
      ],
      highlight: true,
    },
    {
      name: "Ultimate Dreams",
      price: "$29.99",
      interval: "month",
      features: [
        "Create unlimited avatars",
        "Unlimited AI chat messages",
        "Unlimited image generations",
        "All fantasy scenarios",
        "Priority voice chat",
        "Exclusive monthly content",
      ],
      highlight: false,
    },
  ];

  const handleSelectPlan = (plan: { name: string; price: string }) => {
    setSelectedPlan(plan);
    navigate("/payment");
  };

  return (
    <GradientBackground animate className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <GradientText as="h1" className="text-5xl font-bold mb-4 text-glow">
            Choose Your Fantasy Journey
          </GradientText>
          <p className="text-lg text-secondary/90">
            Select a plan to begin your adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative group transition-transform duration-300 hover:scale-105"
            >
              <GlassCard
                className={`h-full transition-all duration-300 ${
                  plan.highlight ? "glow" : "hover:glow"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 -right-3 animate-pulse">
                    <Badge className="bg-gradient-to-r from-primary to-secondary border-none px-3 py-1">
                      <Sparkles className="w-4 h-4 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <GradientText as="h3" className="text-2xl font-bold mb-2">
                    {plan.name}
                  </GradientText>
                  <div className="flex items-baseline">
                    <GradientText className="text-4xl font-bold">
                      {plan.price}
                    </GradientText>
                    <span className="text-secondary ml-1">
                      /{plan.interval}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-secondary group-hover:text-secondary/90"
                    >
                      <Check className="h-5 w-5 text-primary mr-2 group-hover:scale-110 transition-transform" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full px-6 py-3 rounded-lg transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold"
                      : "border border-secondary/20 hover:bg-secondary/10 text-secondary hover:text-white"
                  }`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Select Plan
                </button>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};

export default SubscribePage;
