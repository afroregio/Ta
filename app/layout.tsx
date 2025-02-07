import { Inter } from "next/font/google";
import Link from "next/link";
import NavigationSidebar from "../components/NavigationSidebar";
import Player from "../components/Player";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Offline Music",
  description: "Access your offline music library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          {/* Header - Fixed at the top */}
          <Header />

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar - Fixed to the left */}
            <NavigationSidebar />
``
            {/* Main Content - Allows scrolling if needed */}
            <div className="flex-1 flex flex-col bg-zinc-900 pt-0 px-0 overflow-y-auto">
              <div className="flex-1">{children}</div>
            </div>
          </div>

          {/* Footer - Fixed at the bottom */}
          <Footer />

          {/* Player - Floating above sidebar & content, freely movable */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <Player />
          </div>
        </div>
      </body>
    </html>
  );
}
