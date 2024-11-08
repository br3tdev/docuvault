import SidePanel from "@/components/sidebar/side-panel";
import * as React from "react";

export interface IDashboardLayoutProps {}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex">
      <SidePanel />
      {children}
    </div>
  );
}
