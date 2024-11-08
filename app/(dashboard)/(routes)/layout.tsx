import * as React from "react";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col overflow-y-scroll">
      {children}
    </div>
  );
}
