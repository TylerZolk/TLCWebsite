import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
