import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chase Malcom | Salesforce Developer & Web Developer",
  description:
    "Salesforce Developer and Consultant at Cloud Masonry. Building solutions that actually work for people with Salesforce, React, Next.js, and Python.",
  keywords: [
    "Salesforce Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Cloud Masonry",
    "Apex",
    "Lightning Web Components",
  ],
  authors: [{ name: "Chase Malcom" }],
  creator: "Chase Malcom",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chasemalcom.com",
    siteName: "Chase Malcom",
    title: "Chase Malcom | Salesforce Developer & Web Developer",
    description:
      "Building solutions that actually work for people. Salesforce, React, Next.js, and Python.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chase Malcom - Salesforce Developer & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chase Malcom | Salesforce Developer & Web Developer",
    description:
      "Building solutions that actually work for people. Salesforce, React, Next.js, and Python.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var theme = localStorage.getItem('theme');
          if (theme !== 'light') {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}
      })();
    `,
  }}
/>
      </head>
      
      <body className="antialiased bg-background text-foreground font-sans">
        <ThemeProvider>
          {/* Noise texture overlay for subtle grain effect */}
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
