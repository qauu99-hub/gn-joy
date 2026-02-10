import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "เที่ยวทั่วไทย",
  description: "รวมที่เที่ยว คาเฟ่ ร้านอาหาร ทริป และกิจกรรมทั่วไทย",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}