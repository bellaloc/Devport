import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavLinks from "@/components/common/global/NavLinks";
import { CursorContextProvider } from "@/context/CursorContext";
import { app_info } from "@/data/app";
import { Analytics } from "@vercel/analytics/react";
import { ProjectContextProvider } from "@/context/ProjectContext";
import { is_dark_theme, theme_panel } from "@/data/global";
import ProjectDialog from "@/components/common/projects/ProjectDialog";
import { ServiceContextProvider } from "@/context/ServiceContext";
import ThemePanel from "@/components/common/global/ThemePanel";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const { title, description } = app_info;

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(is_dark_theme ? "dark" : "", "")}>
      <body
        className={cn(
          font.className,
          "overflow-x-clip bg-[var(--bg-secondary)] relative"
        )}
      >
        <CursorContextProvider>
          <ProjectContextProvider>
            <ServiceContextProvider>
              <ProjectDialog />

              {theme_panel ? <ThemePanel /> : null}

              <NavLinks />

              {children}
            </ServiceContextProvider>
          </ProjectContextProvider>
        </CursorContextProvider>

        <Analytics />
      </body>
    </html>
  );
}
