import React from "react";
import Header from "../nav/nav";
import Footer from "../footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA]">
      <Header />
      <div className="w-full max-w-screen-xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
