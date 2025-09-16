import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import GlobalModal from "@/components/GlobalModal";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    defer
                    src="http://localhost:3000/script.js"
                    data-website-id="64ddb8d9-881b-43f5-b4d1-6410e96bfb84"
                ></script>
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-white  text-black`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ModalProvider>
                        {children}
                        <GlobalModal />
                    </ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
