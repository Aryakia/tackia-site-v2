export const metadata = {
  title: "Tackia — Mexican Street Food Truck in Vancouver",
  description: "Bright, bold, and flavour-packed. Tacos, nachos, and Mexican-style hot dogs. Book the Tackia truck for your next event.",
};

import "./../styles/globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
