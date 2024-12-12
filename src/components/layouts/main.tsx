import { Menu } from "lucide-react";
import { GradientText, ThemedButton } from "@/components/ui/themed";
import { Outlet, Link } from "react-router-dom";

const Header = () => (
  <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-secondary/20">
    <div className="container px-4 h-16 flex items-center justify-between">
      <Link to="/">
        <GradientText className="font-bold text-xl">xfable.ai</GradientText>
      </Link>
      <ThemedButton variant="outline" className="p-2">
        <Menu className="h-6 w-6" />
      </ThemedButton>
    </div>
  </header>
);

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
    </div>
  );
};
