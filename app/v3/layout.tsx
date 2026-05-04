import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display3",
  display: "swap",
});

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorant.variable} bg-[#f4f1ea] text-[#2a2d28]`}>
      {children}
    </div>
  );
}
