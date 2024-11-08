import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export interface INavBreadcrumbProps {
  title: string;
}

export default function NavBreadcrumb({ title }: INavBreadcrumbProps) {
  return (
    <div className="h-14 flex items-center justify-between px-4 lg:px-6 border-b border-border/40">
      <h2 className="font-semibold lg:text-xl">{title}</h2>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "176px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
        <UserButton />
      </div>
    </div>
  );
}
