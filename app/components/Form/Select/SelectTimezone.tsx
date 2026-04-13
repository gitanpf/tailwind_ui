import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import SelectItem from "./SelectItem";

const Timezone = () => (
  <Select.Root>
    <Select.Trigger
      aria-label="Timezone"
      className="flex h-full w-full flex-1 items-center justify-between border-zinc-400 bg-transparent outline-none focus:ring-0"
    >
      <Select.Value className="text-xs" placeholder="Select your timezone…" />
      <Select.Icon className="text-zinc-400">
        <ChevronDownIcon className="h-4 w-4" />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="animate-slide-down-and-fade overflow-hidden rounded-md bg-white ring-transparent">
        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-violet-700">
          <ChevronUpIcon className="h-4 w-4" />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-1">
          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Timezone
            </Select.Label>
            <SelectItem value="-10:00">
              Hawaii-Aleutian Standard Time (HST) UTC-10:00
            </SelectItem>
            <SelectItem value="-9:00">
              Alaska Standard Time (AKST) UTC-9:00
            </SelectItem>
            <SelectItem value="-8:00">
              Pacific Standard Time (PST) UTC-8:00
            </SelectItem>
            <SelectItem value="-7:00">
              Mountain Standard Time (MST) UTC-7:00
            </SelectItem>
            <SelectItem value="-6:00">
              Central Standard Time (CST) UTC-6:00
            </SelectItem>
            <SelectItem value="-5:00">
              Eastern Standard Time (EST) UTC-5:00
            </SelectItem>
            <SelectItem value="-4:00">
              Atlantic Standard Time (AST) UTC-4:00
            </SelectItem>
            <SelectItem value="-3:30">
              Newfoundland Standard Time (NST) UTC-3:30
            </SelectItem>
            <SelectItem value="-3:00">Brasilia Time (BRT) UTC-3:00</SelectItem>
            <SelectItem value="-1:00">Azores Time (AZOT) UTC-1:00</SelectItem>
            <SelectItem value="0:00">
              Greenwich Mean Time (GMT) UTC+0:00
            </SelectItem>
            <SelectItem value="+1:00">
              Central European Time (CET) UTC+1:00
            </SelectItem>
            <SelectItem value="+2:00">
              Eastern European Time (EET) UTC+2:00
            </SelectItem>
            <SelectItem value="+3:00">
              Moscow Standard Time (MSK) UTC+3:00
            </SelectItem>
            <SelectItem value="+3:30">
              Iran Standard Time (IRST) UTC+3:30
            </SelectItem>
            <SelectItem value="+4:00">
              Gulf Standard Time (GST) UTC+4:00
            </SelectItem>
            <SelectItem value="+4:30">
              Afghanistan Time (AFT) UTC+4:30
            </SelectItem>
            <SelectItem value="+5:00">
              Pakistan Standard Time (PKT) UTC+5:00
            </SelectItem>
            <SelectItem value="+5:30">
              India Standard Time (IST) UTC+5:30
            </SelectItem>
            <SelectItem value="+5:45">Nepal Time (NPT) UTC+5:45</SelectItem>
            <SelectItem value="+6:00">
              Bangladesh Standard Time (BST) UTC+6:00
            </SelectItem>
            <SelectItem value="+7:00">Indochina Time (ICT) UTC+7:00</SelectItem>
            <SelectItem value="+8:00">
              China Standard Time (CST) UTC+8:00
            </SelectItem>
            <SelectItem value="+9:00">
              Japan Standard Time (JST) UTC+9:00
            </SelectItem>
            <SelectItem value="+9:30">
              Australian Central Standard Time (ACST) UTC+9:30
            </SelectItem>
            <SelectItem value="+10:00">
              Australian Eastern Standard Time (AEST) UTC+10:00
            </SelectItem>
            <SelectItem value="+11:00">
              Solomon Islands Time (SBT) UTC+11:00
            </SelectItem>
            <SelectItem value="+12:00">
              New Zealand Standard Time (NZST) UTC+12:00
            </SelectItem>
            <SelectItem value="+13:00">Tonga Time (TOT) UTC+13:00</SelectItem>
            <SelectItem value="+14:00">
              Line Islands Time (LINT) UTC+14:00
            </SelectItem>
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-violet-700">
          <ChevronDownIcon className="h-4 w-4 text-violet-700" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default Timezone;
