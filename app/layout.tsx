export const metadata = {
  title: "Tackia — Mexican Street Food Truck, Vancouver",
  description: "Tacos, nachos, hot dogs with a Mexican twist. Find us across Vancouver & North Shore. Book catering at catering@tackia.ca",
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
