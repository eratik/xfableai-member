// src/pages/home/index.tsx
// import React from "react";
import { Menu, Sparkles, MessageSquare, Image, Mic } from "lucide-react";
import {
  GradientText,
  GradientBackground,
  GlassCard,
  ThemedButton,
} from "@/components/ui/themed";

const Header = () => (
  <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-secondary/20">
    <div className="container px-4 h-16 flex items-center justify-between">
      <GradientText className="font-bold text-xl">xfable.ai</GradientText>
      <ThemedButton variant="outline" className="p-2">
        <Menu className="h-6 w-6" />
      </ThemedButton>
    </div>
  </header>
);

const HeroSection = () => (
  <GradientBackground animate className="min-h-screen pt-16">
    <div className="container relative px-4 pt-20 pb-12 flex flex-col items-center text-center">
      {/* Avatar Image */}
      <div className="relative mb-6 w-48 h-48">
        <img
          src="/girl2.jpg"
          alt="Fantasy Avatar Example"
          className="w-full h-full object-cover rounded-full border-2 border-secondary glow"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 animate-pulse" />
      </div>
      {/* Main Title */}
      <GradientText as="h1" className="text-5xl font-bold mb-4 text-glow">
        Unleash Your Desires
      </GradientText>

      {/* Subtitle */}
      <p className="text-lg mb-8 text-secondary/90">
        Where AI brings your wildest fantasies into reality
      </p>

      {/* CTA Button */}
      <ThemedButton
        className="w-full max-w-sm py-4 text-lg font-semibold"
        variant="solid"
      >
        Begin Your Fantasy
      </ThemedButton>
    </div>
  </GradientBackground>
);

const HowItWorksSection = () => (
  <div className="py-12 bg-background text-white">
    <div className="container px-4">
      <GradientText as="h2" className="text-3xl font-bold mb-12 text-center">
        How It Works
      </GradientText>

      <div className="space-y-8">
        {[
          {
            title: "Create Your Avatar",
            desc: "Design your perfect digital companion",
            icon: Sparkles,
            img: "/guy.jpg",
          },
          {
            title: "Choose Your Scenario",
            desc: "Set the stage for your fantasy",
            icon: Image,
            img: "/scenarios.jpg",
          },
          {
            title: "Chat & Connect",
            desc: "Engage in immersive conversations",
            icon: MessageSquare,
            img: "/chat.jpg",
          },
          {
            title: "Voice Interaction",
            desc: "Bring your fantasy to life with voice",
            icon: Mic,
            img: "/voice.jpg",
          },
        ].map((step, index) => (
          <GlassCard key={index} className="flex items-center space-x-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <img
                src={step.img}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg border border-secondary/20"
              />
              <step.icon className="absolute -top-2 -right-2 w-6 h-6 text-secondary" />
            </div>
            <div>
              <GradientText as="h3" className="font-bold mb-1">
                {step.title}
              </GradientText>
              <p className="text-secondary">{step.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </div>
);

const PricingSection = () => (
  <div className="py-12 bg-background text-white">
    <div className="container px-4">
      <GradientText as="h2" className="text-3xl font-bold mb-12 text-center">
        Start Your Journey
      </GradientText>

      <GlassCard className="mb-6">
        <GradientText as="h3" className="text-xl font-bold mb-4">
          Premium Access
        </GradientText>
        <ul className="space-y-4 mb-6">
          {[
            "Custom Avatar Creation",
            "Unlimited Text Chat",
            "Voice Interaction",
            "Multiple Fantasy Scenarios",
            "Priority Access to New Features",
          ].map((feature, index) => (
            <li key={index} className="flex items-center text-secondary">
              <span className="mr-2 text-primary">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <ThemedButton className="w-full">
          Subscribe Now - $9.99/month
        </ThemedButton>
      </GlassCard>

      <p className="text-center text-sm text-secondary">
        Additional AI image generations available as pay-per-use
      </p>
    </div>
  </div>
);

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
    </div>
  );
};
