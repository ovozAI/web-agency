import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1a",
        mist: "#f5f7ff",
        lime: "#c6ff3d",
        coral: "#ff6b6b",
        ocean: "#2b7cff"
      },
      boxShadow: {
        glow: "0 0 60px rgba(198, 255, 61, 0.35)",
        card: "0 20px 60px rgba(11, 15, 26, 0.15)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(1200px 600px at 10% 10%, rgba(198, 255, 61, 0.18), transparent 65%), radial-gradient(900px 500px at 90% 10%, rgba(43, 124, 255, 0.18), transparent 60%), radial-gradient(1000px 600px at 50% 100%, rgba(255, 107, 107, 0.15), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
