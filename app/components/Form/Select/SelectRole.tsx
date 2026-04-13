import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import SelectItem from "./SelectItem";

const Role = () => (
  <Select.Root>
    <Select.Trigger
      className="flex h-full w-full flex-1 items-center justify-between border-zinc-400 bg-transparent outline-none"
      aria-label="Role"
    >
      <Select.Value className="text-xs" placeholder="Select your role..." />
      <Select.Icon className="text-zinc-400">
        <ChevronDownIcon className="h-4 w-4" />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="animate-slide-down-and-fade overflow-hidden rounded-md bg-white ring-transparent">
        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-violet-700">
          <ChevronUpIcon className="h-4 w-4 text-violet-700" />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-1">
          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Development & Engineering
            </Select.Label>
            <SelectItem value="Front-End Developer">
              Front-End Developer
            </SelectItem>
            <SelectItem value="Back-End Developer">
              Back-End Developer
            </SelectItem>
            <SelectItem value="Full Stack Developer">
              Full Stack Developer
            </SelectItem>
            <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
            <SelectItem value="Software Engineer">Software Engineer</SelectItem>
            <SelectItem value="Embedded Systems Engineer">
              Embedded Systems Engineer
            </SelectItem>
          </Select.Group>

          <Select.Separator className="m-1 h-px bg-violet-200" />

          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Design & User Experience
            </Select.Label>
            <SelectItem value="UI (User Interface) Designer">
              UI (User Interface) Designer
            </SelectItem>
            <SelectItem value="UX (User Experience) Designer">
              UX (User Experience) Designer
            </SelectItem>
            <SelectItem value="Product Designer">Product Designer</SelectItem>
            <SelectItem value="UX Researcher">UX Researcher</SelectItem>
          </Select.Group>

          <Select.Separator className="m-1 h-px bg-violet-200" />

          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Infrastructure & Security
            </Select.Label>
            <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
            <SelectItem value="Cloud Architect">Cloud Architect</SelectItem>
            <SelectItem value="Cybersecurity Analyst / Specialist">
              Cybersecurity Analyst / Specialist
            </SelectItem>
            <SelectItem value="Site Reliability Engineer (SRE)">
              Site Reliability Engineer (SRE)
            </SelectItem>
            <SelectItem value="SysAdmin (System Administrator)">
              SysAdmin (System Administrator)
            </SelectItem>
          </Select.Group>

          <Select.Separator className="m-1 h-px bg-violet-200" />

          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Management & Agility
            </Select.Label>
            <SelectItem value="Product Manager (PM)">
              Product Manager (PM)
            </SelectItem>
            <SelectItem value="Project Manager">Project Manager</SelectItem>
            <SelectItem value="Product Owner (PO)">
              Product Owner (PO)
            </SelectItem>
            <SelectItem value="Scrum Master">Scrum Master</SelectItem>
            <SelectItem value="Tech Lead">Tech Lead</SelectItem>
            <SelectItem value="Engineering Manager">
              Engineering Manager
            </SelectItem>
          </Select.Group>

          <Select.Separator className="m-1 h-px bg-violet-200" />

          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Quality & Testing
            </Select.Label>
            <SelectItem value="QA Engineer (Quality Assurance)">
              QA Engineer (Quality Assurance)
            </SelectItem>
            <SelectItem value="QA Automation Engineer">
              QA Automation Engineer
            </SelectItem>
            <SelectItem value="Software Tester">Software Tester</SelectItem>
          </Select.Group>

          <Select.Separator className="m-1 h-px bg-violet-200" />

          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Data & Artificial Intelligence
            </Select.Label>
            <SelectItem value="Data Scientist">Data Scientist</SelectItem>
            <SelectItem value="Data Analyst">Data Analyst</SelectItem>
            <SelectItem value="Data Engineer">Data Engineer</SelectItem>
            <SelectItem value="Machine Learning Engineer">
              Machine Learning Engineer
            </SelectItem>
            <SelectItem value="AI Specialist">AI Specialist</SelectItem>
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-violet-700">
          <ChevronDownIcon className="h-4 w-4 text-violet-700" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default Role;
