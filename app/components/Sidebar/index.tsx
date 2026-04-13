'use client'

import { Logo } from "./Logo";
import {
  Search,
  BarChart,
  Flag,
  Home,
  SquareStack,
  CheckSquare,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputRoot, InputPrefix, InputControl } from "./Input";
import * as Collapsible from "@radix-ui/react-collapsible";

export const Sidebar = () => {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:relative lg:right-auto lg:w-80 lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      

      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <button className="rounded-md p-2 hover:bg-zinc-50">
            <Menu className="h-6 w-6 text-zinc-500" />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content 
        forceMount 
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
          
          <UsedSpaceWidget />
          
          <div className="h-px bg-zinc-200" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};