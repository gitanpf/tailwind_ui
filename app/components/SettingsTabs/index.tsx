"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  const tabs = [
    { value: "tab1", title: "My details" },
    { value: "tab2", title: "Profile" },
    { value: "tab3", title: "Password" },
    { value: "tab4", title: "Team" },
    { value: "tab5", title: "Plan" },
    { value: "tab6", title: "Billing" },
    { value: "tab7", title: "E-mail" },
    { value: "tab8", title: "Notifications" },
    { value: "tab9", title: "Integrations" },
    { value: "tab10", title: "API" },
  ];

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <div className="relative mt-6">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent md:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent md:hidden" />

        <Tabs.List className="hide-scrollbar flex items-center gap-4 overflow-x-auto border-b border-zinc-200">
          {tabs.map((tab) => (
            <TabItem
              key={tab.value}
              value={tab.value}
              title={tab.title}
              isSelected={currentTab === tab.value}
            />
          ))}
        </Tabs.List>
      </div>
    </Tabs.Root>
  );
}