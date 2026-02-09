// app/layout.js
import { Providers } from "@/components/Providers";
import "../styles/globals.css"; // Double check this path matches your styles folder

export const metadata = {
  title: "Admin Portfolio CMS",
  description: "Backend-driven portfolio management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}