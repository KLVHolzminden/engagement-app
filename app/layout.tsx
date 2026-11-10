import "./globals.css";

export const metadata = { title: "Engagement-Kompass", description: "Weniger müssen. Mehr bewirken.", manifest: "/manifest.webmanifest" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
