import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Hint from "../hint";

export interface ISidebarItemProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

export default function SidebarItem({
  label,
  icon: Icon,
  href,
}: ISidebarItemProps) {
  const pathname = usePathname();
  console.log("Pathname>>>>>", pathname);
  const router = useRouter();

  const isActive = pathname === href;

  const onClick = () => {
    router.push(href);
  };

  return (
    <Hint label={label} side={"right"} align={"center"} sideOffset={14}>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-md bg-transparent text-slate-500 hover:text-slate-600 hover:bg-accent",
          isActive && "text-sky-700 bg-accent hover:text-sky-700"
        )}
      >
        {/* <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary" for="paypal"><svg role="img" viewBox="0 0 24 24" class="mb-3 h-6 w-6"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" fill="currentColor"></path></svg>Paypal</label> */}
        <Link href={href}>
          <Icon className="size-5" />
        </Link>
      </button>
    </Hint>
  );
}
