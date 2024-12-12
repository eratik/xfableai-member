// src/lib/theme/config.ts
export type ThemeConfig = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
    };
    gradient: {
      from: string;
      via?: string;
      to: string;
    };
  };
  effects: {
    borderOpacity: string;
    glowOpacity: string;
    overlayOpacity: string;
  };
  patterns: {
    diagonal: {
      color1: string;
      color2: string;
      size: string;
    };
  };
};

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "pink-500",
    secondary: "cyan-500",
    accent: "purple-500",
    background: "black",
    text: {
      primary: "white",
      secondary: "cyan-200",
    },
    gradient: {
      from: "pink-500",
      via: "purple-500",
      to: "cyan-500",
    },
  },
  effects: {
    borderOpacity: "20",
    glowOpacity: "30",
    overlayOpacity: "10",
  },
  patterns: {
    diagonal: {
      color1: "#ff00ea1a",
      color2: "#00ffff1a",
      size: "60px",
    },
  },
};
