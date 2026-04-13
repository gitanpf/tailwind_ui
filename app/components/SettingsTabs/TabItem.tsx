"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none transition-colors"
    >
      <span className="relative z-10">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute left-0 right-0 -bottom-px h-0.5 bg-violet-700 z-20"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Tabs.Trigger>
  );
}