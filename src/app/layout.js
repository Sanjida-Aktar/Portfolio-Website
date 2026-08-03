import "./globals.css";

export const metadata = {
  title: "Sanjida Aktar | Portfolio",
  description:
    "Personal portfolio of Sanjida Aktar, CSE Student and Aspiring Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}