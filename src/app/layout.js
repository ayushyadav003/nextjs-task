"use client";
import "./globals.css";
import Header from "../components/header/Header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
