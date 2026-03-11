// app/layout.js
import "../styles/globals.css"; // Double check this path matches your styles folder

export const metadata = {
  title: "Huzaifa Saran | Full-Stack Developer Portfolio",
  description: "Portfolio of Huzaifa Saran, Full-Stack Developer specializing in scalable web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}