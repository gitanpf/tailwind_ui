import { SettingsTabs } from "./components/SettingsTabs";
import {
  InputRoot,
  InputControl,
  InputPrefix,
} from "./components/Sidebar/Input";
import { Mail, Globe, Clock, User, ChevronDown } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Editor } from "./components/Form/Editor";
import { Role, Country, Timezone } from "./components/Form/Select";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-8 lg:items-stretch">
      <header className="w-full space-y-4 text-center lg:text-left">
        <h1 className="text-3xl font-semibold text-zinc-900">Settings</h1>
        <SettingsTabs />
      </header>

      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-zinc-200 pb-5 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-900">
              Personal info
            </h2>
            <p className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-px flex w-full flex-col divide-y divide-zinc-200"
        >
          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label htmlFor="firstName" className="font-medium text-zinc-700">
              Name
            </label>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Anelise" />
              </InputRoot>
              <InputRoot>
                <InputControl id="lastName" defaultValue="Pedroso Fernandes" />
              </InputRoot>
            </div>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail address
            </label>
            <InputRoot>
              <Mail className="h-5 w-5 text-zinc-400" />
              <InputControl
                id="email"
                type="email"
                defaultValue="contato.anpf@gmail.com"
              />
            </InputRoot>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <div className="space-y-1">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700"
              >
                Your photo
              </label>
              <span className="block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </div>

            <FileInput.Root className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label htmlFor="Role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-violet-600">
              <InputRoot className="flex w-full items-center gap-2 rounded-md border-zinc-400 p-2">
                <User className="h-5 w-5 text-zinc-400" />
                <Role />
              </InputRoot>
            </div>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label
              htmlFor="Country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-violet-600">
              <InputRoot className="flex w-full items-center gap-2 rounded-md border-zinc-400 p-2">
                <Globe className="h-5 w-5 text-zinc-400" />
                <Country />
              </InputRoot>
            </div>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div className="flex w-full items-center gap-2 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-violet-600">
              <InputRoot className="flex w-full items-center gap-2 rounded-md border-zinc-400 p-2">
                <Clock className="h-5 w-5 text-zinc-400" />
                <Timezone />
              </InputRoot>
            </div>
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <div className="space-y-1">
              <label
                htmlFor="bio"
                className="text-sm font-medium text-zinc-700"
              >
                Bio
              </label>
              <span className="block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </div>
            <Editor
              id="bio"
              defaultValue="Front-End Engineering Student | React & Tailwind."
            />
          </div>

          <div className="lg:grid-cols-form flex flex-col items-center gap-3 py-6 text-center lg:grid lg:items-start lg:text-left">
            <label
              htmlFor="project"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-3">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-center gap-2 py-2 md:justify-end">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
