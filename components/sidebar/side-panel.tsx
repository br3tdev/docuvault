"use client";

import {
  Archive,
  Building,
  FolderMinus,
  MessageSquare,
  Trash2,
  UserCog,
} from "lucide-react";
import { Icons } from "../ui/icons";
import SidebarItem from "./sidebar-item";
import UserMenu from "./user-menu";

const routes = [
  { label: "Document Tray", icon: Archive, href: "/" },
  { label: "Folders", icon: FolderMinus, href: "/folders" },
  { label: "Conversations", icon: MessageSquare, href: "/conversations" },
  { label: "Organizations", icon: Building, href: "/organizations" },
  { label: "Trash", icon: Trash2, href: "/trash" },
];

export interface ISidePanelProps {}

export default function SidePanel(props: ISidePanelProps) {
  return (
    <div className="h-full w-[58px] bg-white flex flex-col border-r">
      {/* Home */}
      <div className="h-14 flex items-center justify-center p-2 border-b">
        <div className="flex items-center justify-center size-[40px] py-2 border rounded-md">
          <Icons.logo className="w-[34px] h-[28px]" />
        </div>
      </div>

      {/* Navigation */}
      <div className="h-full flex flex-col justify-between">
        {/* nav-top */}
        <div className="flex flex-col space-y-1 p-2">
          {routes.map(({ label, icon, href }) => (
            <SidebarItem key={label} label={label} icon={icon} href={href} />
          ))}
        </div>

        {/* nav-bottom */}
        <div className="flex flex-col p-2">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-transparent text-slate-500 hover:text-slate-600 hover:bg-accent"
          >
            <UserMenu>
              <UserCog className="size-5" />
            </UserMenu>
            {/* <UserButton /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
