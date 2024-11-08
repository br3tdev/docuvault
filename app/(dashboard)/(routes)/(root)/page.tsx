"use client";

import NavBreadcrumb from "@/components/navigation/nav-breadcrumb";
import { data } from "@/constants/data";
import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "../../_components/empty-org";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

export default function DashboardPage() {
  const { organization } = useOrganization();

  return (
    <div className="h-full relative">
      {/* Header */}
      <header className="fixed top-0 inset-x-[58px] w-[calc(100%-58px)] z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
        <NavBreadcrumb title="Document Tray" />
      </header>
      {/* Main */}
      {/* <HeroPattern /> */}
      {/* <div className="absolute inset-y-14 z-50 mx-0 w-full overflow-hidden bg-white/0 backdrop:blur-sm h-4" /> */}

      {!organization ? (
        <EmptyOrg />
      ) : (
        <div className="mt-14">
          <div className="w-full h-full flex flex-col space-y-3 px-8 mb-8">
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
}
